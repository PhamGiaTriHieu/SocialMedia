import {StyleSheet} from 'react-native';
import {baseTypography} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightMedium,
    fontSize: scaleFontSize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightMedium,
    fontSize: scaleFontSize(16),
  },
});
