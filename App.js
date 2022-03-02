import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator';
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.log(err)}
/>
    );
  }
  return (
  <NavigationContainer>
    <BottomTabNavigator/>
  </NavigationContainer>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
