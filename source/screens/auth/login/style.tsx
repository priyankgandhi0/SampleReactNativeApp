import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { Fonts } from '../../../theme/fonts';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.black_101826,
  },
  flex: {
    flex: 1,
  },
  contentHeaderText: {
    ...Fonts.NUNITO_BOLD_24,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    height: moderateScale(220),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  bannerView: {
    paddingHorizontal: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: { width: moderateScale(305), height: moderateScale(305) },
  scroll: {
    height: moderateScale(200),
  },
  logo: {
    width: moderateScale(170),
    height: moderateScale(40),
    alignSelf: 'center',
  },
  bannerBoldText: {
    ...Fonts.NUNITO_EXTRABOLD_20,
    color: Colors.dark_gray_233B58,
  },
  bannerText: {
    ...Fonts.NUNITO_REGULAR_20,
    color: Colors.dark_gray_233B58,
    alignSelf: 'center',
  },
  bottomWrap: { justifyContent: 'center', flexDirection: 'row' },
  bannerActiveDot: {
    backgroundColor: '#FFFFFF56',
    marginHorizontal: moderateScale(5),
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(12),
  },
  bannerInActiveDot: {
    backgroundColor: Colors.black_101826,
    marginHorizontal: moderateScale(5),
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(12),
    borderColor: '#FFFFFF56',
    borderWidth: 1,
  },
  forgotPassword: {
    borderWidth: 0,
    backgroundColor: Colors.transparent,
    alignSelf: 'flex-end',
    height: moderateScale(18),
  },
  forgotPasswordText: {
    ...Fonts.NUNITO_SEMIBOLD_14,
    color: Colors.primary,
  },
  skipText: {
    ...Fonts.NUNITO_SEMIBOLD_14,
    color: Colors.white,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default styles;
