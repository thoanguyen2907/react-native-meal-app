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

// export default NavigationContainer(MealsNavigator)
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const  MealsNavigator = () => {
  return (

      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Category" component={CategoriesScreen} 
         options={{
          title: 'Category',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
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


const  MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MealsNavigator;