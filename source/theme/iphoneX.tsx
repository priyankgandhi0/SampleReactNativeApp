import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

const dimen = Dimensions.get('window');
export function isIphoneX(): boolean {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

export function ifIphoneX<T>(iphoneXStyle: T, regularStyle: T): T {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe: boolean): number | undefined {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace(): number {
  return isIphoneX() ? 34 : 0;
}

export const isTablet = (): boolean => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = dimen.width * pixelDensity;
  const adjustedHeight = dimen.height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  }
  return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
};
