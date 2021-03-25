import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

export default class Products extends Component {
  
  renderProducts = (products) => {
    return products.map((item,index) => {
      return (
        <View key={index} style={{padding:20}}>
          <Button onPress={(item) => this.props.onPress(item)}
          title={item.name + " - " + item.price}/>

        </View>
      )
    })
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          (this.renderProducts.this.props.products)
        </View>
    );
  }
}
