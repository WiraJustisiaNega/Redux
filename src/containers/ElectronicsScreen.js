import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {Electronics} from './Electronics'
import {connect} from 'react-redux'
import Products from '../Components/Products'

class ElectronicsScreen extends Component {
    
    static navigationOptions = {
        HeaderTitle: 'Electronics'
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor: '#fff',alignItems:'center',justifyContent:'center'}}>
                <Products products={Electronics} onPress=
                {this.props.addItemToCart}/>
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

export default connect(null, mapDispatchToProps) (ElectronicsScreen)