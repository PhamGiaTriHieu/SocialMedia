import {StyleSheet} from 'react-native';
import {baseTypography} from '../fonts/helper';

export const globalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    position: 'relative',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 10,
    position: 'absolute',
    top: 10,
    right: 12,
  },
  messageNumber: {
    top: 0,
    right: 0,
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: baseTypography.fontFamily,
    fontWeight: baseTypography.fontWeightSemiBold,
  },
  userStoriesContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});
