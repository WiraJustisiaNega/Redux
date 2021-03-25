import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {Books} from './Books'
import Products from '../Components/Products'

class BooksScreen extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor: '#fff',alignItems:'center',justifyContent:'center'}}>
                <Products products={Books} onPress={this.props.addItemToCart} />
            </View> 
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addItemToCart:(Products) => dispatch({type:'ADD_TO_CART',
    payload:Products})
    }
}

export default connect(null, mapDispatchToProps) (BooksScreen)