import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  username: {
    color: '#000000',
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightMedium,
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightRegular,
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostStats: {
    // marginLeft: horizontalScale(10),
    marginLeft: horizontalScale(20),
    flexDirection: 'row',
  },
  userPostStatButton: {
    flexDirection: 'row',
  },
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatText: {
    marginLeft: horizontalScale(3),
    color: '#79869F',
  },
});
export default style;
