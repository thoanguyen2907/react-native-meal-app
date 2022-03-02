import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsNavigator from "./MealsNavigator";
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from "@expo/vector-icons";
 
const Tab = createBottomTabNavigator();
 
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    tabBarOptions={{
        activeTintColor: "#F08080",
        showIcon: true, showLabel: false 
    }}
    >
      <Tab.Screen name="Home" component={MealsNavigator} 
      options={{ 
        tabBarLabel: "Home",
          tabBarIcon: () => {
        return <Ionicons name = "ios-home"  size={ 20 } color={ 'red' }/>
    }}}
    />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen}
      options={{ 
        tabBarLabel: "Favorite",
        tabBarIcon: () => {
        return <Ionicons name = "ios-star"  size={ 20 } color={ 'red' }/>
    }}}
       />
    </Tab.Navigator>
  );
};
 
export default BottomTabNavigator;
 
