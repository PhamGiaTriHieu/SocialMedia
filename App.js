/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {baseTypography} from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textStyled1}>Whereas recognition of the</Text>
      <Text style={styles.textStyled2}>Whereas recognition of the</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyled1: {
    fontFamily: 'Playfair Display',
    fontWeight: '500',
    fontSize: 50,
  },
  textStyled2: {
    fontFamily: baseTypography.fontFamily,
    fontSize: 50,
    fontWeight: baseTypography.fontWeightSemiBold,
  },
});

export default App;
