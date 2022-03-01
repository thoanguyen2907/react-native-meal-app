import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

// export default NavigationContainer(MealsNavigator)
const Stack = createNativeStackNavigator();

const  MealsNavigator = ()   => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
export default MealsNavigator;