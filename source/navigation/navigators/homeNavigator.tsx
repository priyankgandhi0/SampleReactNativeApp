import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigations } from '../../constant';
import Home from '../../screens/dashboard/home';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Navigations.HOME}>
      <Stack.Screen name={Navigations.HOME} component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
