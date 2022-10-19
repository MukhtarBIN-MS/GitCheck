import { Text, View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from './Search';
import LearnScreen from './Learn';


const Tab = createMaterialBottomTabNavigator();

export default function BottomNav(){
  return(
   
      <Tab.Navigator initialRouteName="Search" activeColor="green"  barStyle={{ backgroundColor:'#fff', borderTopEndRadius:1}}>
        {/* <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarLabel:'Search', tabBarIcon:({color})=>(<MaterialCommunityIcons name="account" color={color} size={20} /> ),}} /> */}
        <Tab.Screen name="Learn" component={LearnScreen} options={{ tabBarLabel:'Learn', tabBarIcon:({color})=> (<MaterialCommunityIcons name="book" color={color} size={20} /> ),}} />
        <Tab.Screen name="Account" component={LearnScreen} options={{ tabBarLabel:'Account', tabBarIcon:({color})=> (<MaterialCommunityIcons name="account" color={color} size={20} /> ),}} />
        </Tab.Navigator>
    
  )
}