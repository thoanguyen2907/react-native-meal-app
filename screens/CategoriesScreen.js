import React from 'react';
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';


const CategoriesScreen = ({ navigation }) => {

    const renderGridItem = (itemData) => {
        return ( 
        <CategoryGridTitle 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {        
            navigation.navigate('CategoryMeals',{
                categoryId : itemData.item.id,
                name: 'CategoryMeals'             
        })
        }}/>
        )
    }
    return (
            <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns = {2} />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1, 
        margin: 15,
        height: 150 
    }
})

export default CategoriesScreen;
