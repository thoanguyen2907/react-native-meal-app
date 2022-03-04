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
import { DrawerActions } from '@react-navigation/native';

// export default NavigationContainer(MealsNavigator)
const Stack = createNativeStackNavigator();

const  FilterNavigator = (props) => {
  return (

      <Stack.Navigator initialRouteName="Filter">
        <Stack.Screen name="Filter" component={FiltersScreen} 
        options={ ({route, navigation}) => ({
        
          headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  props.navigation.dispatch(DrawerActions.toggleDrawer());
                
                }}
              />
            </HeaderButtons>
          )
            
          ,
          headerRight: () => (

            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Save"
              iconName="ios-save"
              onPress={route.params.save()} 
            
            />
          </HeaderButtons>
          )
           
        })}
        />
      
      </Stack.Navigator>
  
  );
}



export default FilterNavigator;