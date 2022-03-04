import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

// export default NavigationContainer(MealsNavigator)
const Stack = createNativeStackNavigator();

const  FavNavigator = () => {
  return (

      <Stack.Navigator initialRouteName="Favorites">
        <Stack.Screen name="Favorites" component={FavoritesScreen} 
        />
        <Stack.Screen name="MealDetails" component={MealsDetailScreen} 
         options={{
          title: 'MealDetails',
          headerStyle: {
            backgroundColor: '#8A2BE2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Favorite"
              iconName="ios-star"
              onPress={() => {
                console.log('Mark as favorite!');
              }}
            />
          </HeaderButtons>
          )
        }}
        />
      </Stack.Navigator>
  
  );
}



export default FavNavigator;