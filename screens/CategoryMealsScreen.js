import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
    const renderItem = itemData => {
        return (
            <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetails',{
                    mealId : itemData.item.id,
                    name: 'meal', 
                    key:    itemData.item.id 
            })}} >
            </MealItem>
        )
    }
    const catId = props.route.params.categoryId
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    return (
        <View style={styles.screen}>
            <FlatList data = {displayedMeals} keyExtractor={(item, index) => item.id}
            renderItem = {renderItem} style = {{width: "100%"}}/>
            <MealList listData = {displayedMeals}  navigation={props.navigation}/>
        </View>
    );
}
CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = props.route.params.categoryId
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;
