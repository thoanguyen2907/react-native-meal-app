import React , {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';

const FilterSwitch = props => {
    return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
    );
  };
  
const FiltersScreen = (props) => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const saveFilters = useCallback(() => {
        const appliedFilters = {
          glutenFree: isGlutenFree,
          lactoseFree: isLactoseFree,
          vegan: isVegan,
          isVegetarian: isVegetarian
        };
      }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);
      
    useEffect(() => {
        navigation.setParams({ save: saveFilters });
      }, [saveFilters]);
    return (
        <View>
           <Text>Filters Screen</Text>  
           <FilterSwitch label='Gluten-free' state={isGlutenFree}
           onChange={newValue => setIsGlutenFree(newValue)}/>
        <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
       <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
       <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22, 
        margin: 20, 
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "80%"
    } 

})

export default FiltersScreen;
