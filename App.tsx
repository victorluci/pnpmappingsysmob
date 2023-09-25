import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigator/TabNavigator';
import HomeScreen from './src/screens/home';
import Welcome from './src/screens/welcome';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
     <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component ={TabNavigator} />
        <Stack.Screen name="home" component ={HomeScreen} />
        <Stack.Screen name="welcome" component ={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

