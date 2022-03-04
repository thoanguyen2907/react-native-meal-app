import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Drawer = createDrawerNavigator();

const  MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      <Drawer.Screen name="Category" component={CategoriesScreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer