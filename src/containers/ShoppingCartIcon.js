import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

const ShoppingCartIcon = (props) => (
    <View style={{padding:5}}>
<View style={{position:'absolute', height:30,width:30,borderRadius:15,right:15,bottom:15,alignItems:'center',backgroundColor:'yellow'}}>
     <Text>0</Text>
</View>
<Icon name="ios-cart" size={30} />
</View>
)

const mapStateToProps = (state) => {
    return {
        cartItem : state
    }
}
export default connect()(ShoppingCartIcon)