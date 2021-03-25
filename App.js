import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/containers/ShoppingCart'
import {Provider} from 'react-redux'
import store from './src/Reducers/store/index'

export default class App extends React.Component {
  render() {
  return (
    <NavigationContainer>
    <Route />
    </NavigationContainer>
  );
}
} 