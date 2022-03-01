import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const MealsDetailScreen = (props) => {

  const mealId = props.route.params.mealId
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <View>
          <Text>{selectedMeal.title}</Text> 
          <Button
            title="Go Back" 
            onPress={() => props.navigation.goBack()}
      />
        </View>
    );
}
MealsDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
    screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
}})

export default MealsDetailScreen;
