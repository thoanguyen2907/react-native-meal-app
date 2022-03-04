import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsNavigator from "./MealsNavigator";
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from "@expo/vector-icons";
import FavNavigator from "./FavNavigator";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FilterNavigator from "./FilterNavigator";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Category" component={MealsNavigator} 
      options={{ 
          tabBarIcon: (tabInfo) => {
        return <Ionicons name = "ios-home"  size={ 20 } color={tabInfo.color}/>
    },
    tabBarColor: '#7FFFD4'
}} />
      <Tab.Screen name="Favorites" component={FavNavigator}
      options={{ 
        tabBarIcon: (tabInfo) => {
        return <Ionicons name = "ios-star"  size={ 20 } color={tabInfo.color}/>
    },
    tabBarColor: '#7FFFD4'
}}
       />
    </Tab.Navigator>
  );
};
 
const MainNavigator = () => {
  return (
       <Drawer.Navigator>
      <Drawer.Screen name="Category" component={BottomTabNavigator} />
      <Drawer.Screen name="Filter" component={FilterNavigator} />
    </Drawer.Navigator>
  )
}
export default MainNavigator;
 
