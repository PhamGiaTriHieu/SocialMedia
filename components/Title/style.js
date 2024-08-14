import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightSemiBold,
    fontSize: scaleFontSize(24),
  },
});

export default style;
