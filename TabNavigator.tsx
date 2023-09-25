import React from 'react';
import HomeScreen from '../screens/home';
import Map from '../screens/map';
import searchtab from '../screens/searchscreen';
import Welcome from '../screens/welcome';
import {COLOR, FONTSIZE, SPACING} from '../theme/theme';
import customIcon from '../components/customIcon';
import {StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const  TabNavigator =  () => {
return(
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Map" component={Map} />
<Tab.Screen name="SearchTab" component={searchtab} />
<Tab.Screen name="Welcome" component={Welcome} />
</Tab.Navigator>
);
};

const styles = StyleSheet.create({});
export default TabNavigator;