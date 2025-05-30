import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigations } from "../constant";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  [Navigations.BOTTOM_TABS]: NavigatorScreenParams<TabParamList>;
};

// Define the types for your Bottom Tab Navigator
export interface TabParamList {
  [Navigations.HOME_NAVIGATOR]: undefined;
  [Navigations.SETTING_NAVIGATOR]: undefined;
}

/**
 * ILoginProps
 */
export type ILoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

/**
 * ISignupProps
 */
export type ISignupProps = NativeStackScreenProps<RootStackParamList, "Signup">;

/**
 * IForgotPasswordProps
 */
export type IForgotPasswordProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;
