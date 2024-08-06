/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {baseTypography} from './assets/fonts/helper';
import Title from './components/Title/Title';

const App = () => {
  return (
    <SafeAreaView>
      <Title title="Let’s Explore" />
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
