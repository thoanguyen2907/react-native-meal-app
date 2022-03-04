import React from 'react';
import { View, FlatList, StyleSheet , Text} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import MealItem from './MealItem';

const MealList = props => {
console.log('props MealList', props.listData)
  const renderMealItem = itemData => {  return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
     
          props.navigation.dispatch(
            CommonActions.navigate({
              name: 'MealDetails',
              params: {
                mealId: itemData.item.id
              },
            })
          )
        }
      }
      />
    );
  };
  return (
    <View style={styles.list}>
        <Text>Hello123</Text>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default MealList;
