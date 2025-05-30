import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../theme/colors';
import { moderateScale } from 'react-native-size-matters';
import { Navigations } from '../../constant';
import HomeNavigator from './homeNavigator';
import SettingNavigator from './settingNavigator';
import { Fonts } from '../../theme/fonts';
import { BottomHomeIcon, SettingIcon } from '../../theme/svg';
import { TabParamList } from '../../types/navigation.types';

const Tab = createBottomTabNavigator();
const RenderProfileIcon = (props: any) => {
  return (
    <BottomHomeIcon
      height={moderateScale(26)}
      width={moderateScale(26)}
      iconColor={props?.focused ? Colors.primary : Colors.white}
    />
  );
};

const RenderSettingIcon = (props: any) => {
  return (
    <SettingIcon
      height={moderateScale(20)}
      width={moderateScale(20)}
      iconColor={props?.focused ? Colors.primary : Colors.white}
    />
  );
};

const BottomTabs = () => {
  return (
    <View style={Styles.root}>
      <Tab.Navigator
        initialRouteName={Navigations.HOME_NAVIGATOR}
        screenOptions={() => ({
          tabBarLabelStyle: {
            ...Fonts.NUNITO_SEMIBOLD_14,
            color: Colors.white,
          },
          tabBarLabelPosition: 'below-icon',
          tabBarInactiveTintColor: Colors.white,
          tabBarStyle: {
            backgroundColor: Colors.dark_gray_1F2937,
            height: moderateScale(62),
            paddingTop: moderateScale(6),
            paddingBottom: moderateScale(5),
            ...Platform.select({
              ios: {
                height: moderateScale(80),
                paddingTop: moderateScale(6),
                paddingBottom: moderateScale(18),
              },
            }),
          },
        })}>
        <Tab.Screen
          name={Navigations.HOME_NAVIGATOR}
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: RenderProfileIcon,
          }}
        />

        <Tab.Screen
          name={Navigations.SETTING_NAVIGATOR}
          component={SettingNavigator}
          options={{
            tabBarLabel: 'Settings',
            headerShown: false,
            tabBarIcon: RenderSettingIcon,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabs;

const Styles = StyleSheet.create({
  root: { flex: 1 },
});
