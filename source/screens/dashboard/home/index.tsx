import { FlatList, Image, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './style';
import { Images } from '../../../theme/images';
import { moderateScale } from 'react-native-size-matters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getApi } from '../../../utils/restApi';
import { BASE_URL, ENDPOINTS } from '../../../constant';
import { Fonts } from '../../../theme/fonts';
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';
import { LogoutIcon } from '../../../theme/svg';
import { Colors } from '../../../theme/colors';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../actions/userActions';
import AsyncStorageManager from '../../../utils/AsyncStorageManager';

const Home = () => {
  const insets = useSafeAreaInsets();
  const [blog, setBlog] = useState([]);
  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    try {
      const response = await getApi(ENDPOINTS.BLOG_LIST);
      if (response?.data) {
        setBlog(response?.data);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onLogout = useCallback(async () => {
    console.log('logout');
    dispatch(setCurrentUser(null));
    await AsyncStorageManager.clearAllData();
  }, []);

  return (
    <View style={[styles.root]}>
      <View style={{ top: insets.top, flex: 1 }}>
        <View style={[styles.headerContainer]}>
          <View>
            <Image
              source={Images.app_logo}
              style={{ width: moderateScale(42), height: moderateScale(42) }}
              resizeMode="contain"
            />
          </View>

          <Menu>
            <MenuTrigger>
              <View style={styles.moreBtnView}>
                <Image source={Images.icn_user_more_option} style={[styles.roundedMoreIcon]} />
              </View>
            </MenuTrigger>

            <MenuOptions
              optionsContainerStyle={[styles.moreMenu]}
              customStyles={{ optionsContainer: {} }}>
              <MenuOption style={[styles.menuOption]} onSelect={onLogout}>
                <LogoutIcon
                  width={moderateScale(20)}
                  height={moderateScale(20)}
                  iconColor={Colors.red_EF4444}
                />
                <Text style={[styles.menuText, { color: Colors.red_EF4444 }]}>Logout</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

        <View>
          <FlatList
            data={blog || []}
            keyExtractor={(blog, index) => `blog${index}_${blog?.blog_id}`}
            initialNumToRender={10}
            bounces={false}
            contentContainerStyle={styles.folderListView}
            // eslint-disable-next-line react/no-unstable-nested-components
            ListEmptyComponent={() => (
              <View style={styles.empty}>
                <Text
                  style={{
                    ...Fonts.NUNITO_BOLD_16,
                  }}>
                  No recordings found
                </Text>
              </View>
            )}
            renderItem={({ item }: any) => {
              return (
                <View style={[styles.itemView]}>
                  <View style={styles.container}>
                    <View style={styles.leftView}>
                      <View style={styles.playWrap}></View>
                      <View style={{ gap: moderateScale(4) }}>
                        <View style={styles.subView}>
                          <Image source={{ uri: `${BASE_URL}/${item?.blog_image}` }} />
                          <Text style={styles.titleText} numberOfLines={1}>
                            {item?.blog_title}
                          </Text>
                        </View>
                        <Text style={styles.subText}>{item?.blog_date}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Home;
