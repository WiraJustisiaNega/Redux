import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Product from '../Components/Products'
import {connect} from 'react-redux'

class cartScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {this.props.cartItem.length>0?}
        <Product product={this.props.cartItem}/>
        <Text>No Itemns in your cart</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cartItem: state
    }
}

export default connect(mapStateToPRops)(cartScreen)