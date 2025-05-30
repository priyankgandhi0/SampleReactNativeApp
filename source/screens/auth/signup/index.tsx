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
import { ISignupProps } from "../../../types/navigation.types";
import styles from "./style";
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
import { postApi } from "../../../utils/restApi";
import { emailRegex, ENDPOINTS } from "../../../constant";
import Toast from "react-native-toast-message";

const Signup: React.FC<ISignupProps> = () => {
  const insets = useSafeAreaInsets();

  const [currentPage, setCurrentPage] = useState(0);
  const [isShowPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onSignup = async () => {
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
      last_name,
      first_name,
    };
    setLoading(true);
    const response: any = await postApi(ENDPOINTS.SIGNUP, payload);
    setLoading(false);
    if (response?.status === 0) {
      Toast.show({
        type: "error",
        text1: response?.msg,
      });
    } else {
      Toast.show({
        type: "success",
        text1: "Account created successfully",
      });
      goBack();
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
            <View style={styles.container}>
              <Text style={styles.contentHeaderText}>Create your account</Text>
              <View style={styles.inputContainer}>
                <CommonTextInput
                  title={"First name"}
                  keyboardType={"email-address"}
                  returnKeyType={"next"}
                  placeHolder={"Enter first name"}
                  onChangeText={(value: string) => {
                    setFirst_name(value);
                  }}
                  value={first_name}
                  onSubmitEditing={() => {}}
                />
                <CommonTextInput
                  title={"Last Name"}
                  keyboardType={"email-address"}
                  returnKeyType={"next"}
                  placeHolder={"Enter last name"}
                  onChangeText={(value: string) => {
                    setLast_name(value);
                  }}
                  value={last_name}
                  onSubmitEditing={() => {}}
                />
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
                <CommonTextInput
                  title={"Password"}
                  secureTextEntry={!isShowPassword}
                  returnKeyType={"next"}
                  placeHolder={"Password"}
                  onChangeText={(value: any) => {
                    setUserPassword(value);
                  }}
                  value={userPassword}
                  onSubmitEditing={() => {}}
                  rightIcon={
                    isShowPassword ? Images.icn_eye_open : Images.icn_eye_close
                  }
                  iconSize={moderateScale(16)}
                  onPressRightIcon={() => {
                    setShowPassword(!isShowPassword);
                  }}
                  rightIconStyle={{
                    tintColor: Colors.black_101826,
                    paddingVertical: moderateScale(20),
                  }}
                />
              </View>

              <ButtonView title={"Signup"} onPress={onSignup} />
              <TouchableOpacity
                onPress={() => {
                  goBack();
                }}
              >
                <Text style={styles.skipText}>
                  Already have an account? Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Loader isLoading={isLoading} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;
