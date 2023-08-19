/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CustomIcon from './src/components/CustomIcon';

const App = () => {
  return (
    <View>
      <Text>Jai Dada</Text>
      <CustomIcon name="video" color="#f0f" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
