import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useMemo, useState } from "react";
import { ILoginProps } from "../../../types/navigation.types";
import { moderateScale, s } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Images } from "../../../theme/images";
import LinearGradient from "react-native-linear-gradient";
import { Metrics } from "../../../theme/metrics";
import { Colors } from "../../../theme/colors";
import CommonTextInput from "../../../components/input";
import ButtonView from "../../../components/button";
import Loader from "../../../components/loader";
import { goBack } from "../../../navigation/navigationService";
import { emailRegex, ENDPOINTS } from "../../../constant";
import Toast from "react-native-toast-message";
import { postApi } from "../../../utils/restApi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../../actions/userActions";
import AsyncStorageManager from "../../../utils/AsyncStorageManager";
import styles from "./style";

const ForgotPassword: React.FC<ILoginProps> = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [isShowPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState(""); //('rajkanani51@gmail.com');
  const [userPassword, setUserPassword] = useState(""); //('123456');
  const [isLoading, setLoading] = useState(false);

  const onLogin = async () => {
    const email = userEmail.trim();
    const password = userPassword.trim();
    if (email.length === 0) {
      Toast.show({
        type: "error",
        text1: "Please enter email address",
      });
      return;
    }
    if (!emailRegex.test(email)) {
      Toast.show({
        type: "error",
        text1: "Please enter valid email address",
      });
      return;
    }
    if (password.length === 0) {
      Toast.show({
        type: "error",
        text1: "Please enter password",
      });
      return;
    }
    const payload = {
      email,
      password,
    };
    setLoading(true);
    const response: any = await postApi(ENDPOINTS.LOGIN, payload);
    setLoading(false);
    if (response?.status === 0) {
      Toast.show({
        type: "error",
        text1: response?.msg,
      });
    } else {
      dispatch(setCurrentUser(response?.data));
      await AsyncStorageManager.setData("token", response?.data.auth_token);
    }
  };

  const banners = useMemo(() => {
    let numberOfBanners = 3;
    let data = [];
    for (let i = 0; i < numberOfBanners; i++) {
      data.push(
        <View key={i} style={[styles.bannerView, { width: Metrics?.width }]}>
          <Image
            source={Images.icn_broadcast}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>
      );
    }
    return data || [];
  }, []);

  return (
    <View style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          <View
            style={{
              gap: moderateScale(25),
            }}
          >
            <View style={{ paddingTop: insets.top > 0 ? insets.top : s(21) }}>
              <LinearGradient
                colors={["#FFD6EE", "#78B0ED"]}
                start={{ x: 0, y: 0.75 }}
                end={{ x: 0.75, y: 0 }}
                style={[styles.linearGradient, { width: Metrics.width }]}
              />
              <View style={{ gap: moderateScale(6) }}>
                <Image
                  source={Images.icn_app_logo}
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={[styles.bannerText]}>
                  <Text style={styles.bannerBoldText}>Most Powerful </Text>
                  Webinar Software
                </Text>
              </View>
              <ScrollView
                pagingEnabled={true}
                style={[styles.scroll, { width: Metrics.width }]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                  setCurrentPage(
                    Math.round(
                      event.nativeEvent.contentOffset.x / Metrics.width
                    )
                  );
                }}
              >
                {banners}
              </ScrollView>
              <View style={styles.bottomWrap}>
                {banners.map((item, index) =>
                  currentPage === index ? (
                    <View key={index} style={styles.bannerActiveDot} />
                  ) : (
                    <View key={index} style={styles.bannerInActiveDot} />
                  )
                )}
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: moderateScale(18),
                gap: moderateScale(16),
              }}
            >
              <Text style={styles.contentHeaderText}>Forgot Password</Text>
              <CommonTextInput
                title={"Email Address"}
                keyboardType={"email-address"}
                returnKeyType={"next"}
                placeHolder={"Email Address"}
                onChangeText={(value: string) => {
                  setUserEmail(value);
                }}
                value={userEmail}
                onSubmitEditing={() => {}}
              />

              <ButtonView title={"Next"} />
              <TouchableOpacity
                onPress={() => {
                  goBack();
                }}
              >
                <Text style={styles.skipText}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Loader isLoading={isLoading} />
        </ScrollView>
        <Toast />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ForgotPassword;
