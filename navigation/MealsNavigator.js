import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';


// const MealsNavigator = createNativeStackNavigator({
//     Categories: CategoriesScreen,
//     CategoryMeals: {
//         screen: CategoryMealsScreen
//     },
//     MealDetail: MealsDetailScreen
// })

// export default NavigationContainer(MealsNavigator)
const Stack = createNativeStackNavigator();

const  MealsNavigator = ()   => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="Details" component={MealsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MealsNavigator;