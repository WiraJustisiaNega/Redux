import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          title="Electronics"
          onPress={() => this.props.navigation.navigate('Electronics')}
        />
        <Button   
          title="Books"
          onPress={() => this.props.navigation.navigate('Books')}
        />
      </View>
    );
  }
}
