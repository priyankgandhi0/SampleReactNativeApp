import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigations } from '../../constant';
import Setting from '../../screens/dashboard/setting';

const Stack = createNativeStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Navigations.SETTING}>
      <Stack.Screen
        name={Navigations.SETTING}
        component={Setting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
