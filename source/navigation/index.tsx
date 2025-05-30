import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigations } from '../constant';
import { RootStackParamList } from '../types/navigation.types';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import BottomTabs from './navigators';
import { useSelector } from 'react-redux';
import { isEmpty } from '../utils/commonFunction';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = (): React.ReactElement => {
  const userSelector = useSelector((state: any) => state.user);
  const { currentUser } = userSelector;
  console.log('currentUser', currentUser);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isEmpty(currentUser) ? (
          <Stack.Screen name={Navigations.LOGIN} component={Login} />
        ) : (
          <Stack.Screen name={Navigations.BOTTOM_TABS} component={BottomTabs} />
        )}
        <Stack.Screen name={Navigations.SIGNUP} component={Signup} />

        {/* 
        <Stack.Screen
          name={Navigations.FORGOT_PASSWORD}
          component={ForgotPassword}
        />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
