export enum ENV {
  BASE_URL = 'http://localhost:3009',
}

export enum Navigations {
  // Auth
  SPLASH = 'Splash',
  LOGIN = 'Login',
  SIGNUP = 'Signup',
  FORGOT_PASSWORD = 'ForgotPassword',

  // Tabs
  BOTTOM_TABS = 'BottomTabs',

  // Home
  HOME_NAVIGATOR = 'HomeNavigator',
  HOME = 'Home',

  // Setting
  SETTING_NAVIGATOR = 'SettingNavigator',
  SETTING = 'Setting',
}

export enum API_METHODS {
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const API_RESPONSE = {
  SUCCESS: true,
  FAILED: false,
};

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
