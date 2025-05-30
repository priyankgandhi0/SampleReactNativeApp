import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';
import { moderateScale } from 'react-native-size-matters';
import { Fonts } from '../../../theme/fonts';

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.black_101826 },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(22),
    alignItems: 'center',
    borderBottomWidth: moderateScale(1.2),
    paddingVertical: moderateScale(6),
    paddingRight: moderateScale(6),
    borderBottomColor: Colors.gray_border,
  },
  moreBtnView: {
    borderWidth: 1,
    backgroundColor: Colors.transparent,
    height: moderateScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(32),
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedMoreIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: Colors.primary,
    resizeMode: 'contain',
    transform: [{ rotate: '90deg' }],
  },
  itemView: {
    backgroundColor: '#172234',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    justifyContent: 'center',
    paddingTop: moderateScale(10),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
    justifyContent: 'space-between',
  },
  titleText: {
    ...Fonts.NUNITO_BOLD_16,
  },

  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5),
  },
  subText: {
    ...Fonts.NUNITO_SEMIBOLD_14,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  playWrap: {
    backgroundColor: Colors.black,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  folderListView: {
    gap: moderateScale(10),
    marginVertical: moderateScale(10),
    paddingBottom: moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },
  moreMenu: {
    marginTop: moderateScale(36),
    borderRadius: moderateScale(10),
    shadowOpacity: 1,
    paddingVertical: moderateScale(5),
    ...Platform.select({ ios: { shadowOpacity: 0.1 } }),
  },
  menuOption: {
    flexDirection: 'row',
    gap: moderateScale(12),
    alignItems: 'center',
    paddingLeft: moderateScale(16),
  },
  menuText: {
    ...Fonts.NUNITO_REGULAR_16,
    color: Colors.black,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(30),
  },
});
export default styles;
