import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {baseTypography} from '../../assets/fonts/helper';

export const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
    position: 'relative',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(12),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(10),
    height: verticalScale(8),
    // width: 10,
    // height: 10,
    position: 'absolute',
    top: verticalScale(10),
    right: horizontalScale(10),
  },
  messageNumber: {
    // top: 0,
    // right: 0,
    color: '#FFFFFF',
    fontSize: scaleFontSize(6),
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightSemiBold,
  },
  userStoriesContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});
