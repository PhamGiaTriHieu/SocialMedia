import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightMedium,
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
});
export default style;
