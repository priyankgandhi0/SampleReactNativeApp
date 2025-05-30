import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import { isIphoneX, isTablet } from './iphoneX';

const { width, height } = Dimensions.get('window');

const standardLength = width > height ? width : height;
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight || 0; // iPhone X style SafeAreaView size in portrait
const deviceHeight =
  isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength;

function rfp(percent: number): number {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
function RFValue(fontSize: number, standardScreenHeight = 680): number {
  const size = 375;
  const wid = width < height ? width : height;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  const res = isTablet() ? heightPercent.toFixed(2) : wid / (size / fontSize);
  return Number(res);
}

const wd = (val: number): number => {
  const elemWidth = typeof val === 'number' ? val : parseFloat(val);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};
const hd = (val: number): number => {
  const elemHeight = typeof val === 'number' ? val : parseFloat(val);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export const Metrics = {
  width: width < height ? width : height,
  height: height < width ? width : height,
  screenWidth: width < height ? width : height,
  screenHeight: height < width ? width : height,
  wp: (w: number) => wd(w), // Specify type as number
  hp: (h: number) => hd(h), // Specify type as number
  rfp,
  rfv: RFValue,
};
