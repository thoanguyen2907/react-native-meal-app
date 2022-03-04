import React from 'react';
import {View, StyleSheet, Text, Button, ScrollView, Image} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const ListItem = props => {
  return (
    <View style = {styles.listItem}> 
      <Text>{props.children}</Text>
     </View> 
  )
}
const MealsDetailScreen = (props) => {

  const mealId = props.route.params.mealId
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
      <ScrollView>
       <Image source = {{uri: selectedMeal.imageUrl}} style = {styles.image}/>
      <View style={styles.details }>
            <Text>{selectedMeal.duration}m</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((item, index) => {
        return <ListItem key = {index}>{item}</ListItem>
      })}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((item, index) => {
        return <ListItem key = {index}>{item}</ListItem>
      })}
        </ScrollView>
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
},
mealRow: {
  flexDirection: 'row'
},
details: {
  flexDirection: 'row',
  padding: 15, 
  justifyContent: 'space-around'
},
image: {
  width: '100%',
  height: 200
},
title: {
  fontFamily: 'open-sans-bold',
  fontSize: 22, 
  textAlign: 'center'
},
listItem: {
  marginVertical: 10,
  marginHorizontal: 20,
  borderColor: '#ccc',
  borderWidth: 1, 
  padding: 10
}

})

export default MealsDetailScreen;
