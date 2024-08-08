import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
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
    marginLeft: 10,
  },
  username: {
    color: '#000000',
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightMedium,
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightRegular,
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
});
export default style;
