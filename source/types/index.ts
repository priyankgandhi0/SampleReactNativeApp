import { NativeStackNavigationHelpers } from 'react-native-screens/lib/typescript/native-stack/types';

export type AppAnyType = any;

export interface NavigationInterface {
  navigation?: NativeStackNavigationHelpers;
  // navigation?: Partial<
  //   | Partial<NavigationProp<NavParams>>
  //   | Partial<NativeStackNavigationProp<NavParams>>
  //   | Partial<NavigationHelpers<NavParams, Partial<BottomTabNavigationEventMap>>>
  // >;
}
