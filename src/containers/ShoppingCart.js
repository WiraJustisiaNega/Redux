import React, {Component} from 'react';
import {Text, View,Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../containers/HomeScreen';
import ElectronicsScreen from './ElectronicsScreen';
import BooksScreen from '../containers/BooksScreen';
 


const AppStackNavigator = createStackNavigator();


function LogoTitle() {
    return (
      <Image
        style={{ width: 40, height: 40 }}
        source={require('../assets/shopping.png')}
      />
    );
  }

const Route = () => {
  return ( 
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen name="Shopping App" component={HomeScreen} options={{
            headerRight: props => <LogoTitle {...props} />}}/>
      <AppStackNavigator.Screen name="ElectronicsScreen" component={ElectronicsScreen} />
      <AppStackNavigator.Screen name="BookScreen" component={BooksScreen} />
    </AppStackNavigator.Navigator>
  );
}  

export default Route; 