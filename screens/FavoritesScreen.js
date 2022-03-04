import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
 
    return (
        <View>
            <Text>favMeals12333</Text>
            <MealList listData = {favMeals} navigation={props.navigation}/>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;
