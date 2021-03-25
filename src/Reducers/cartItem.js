import React from 'react'
import { View, Text } from 'react-native'

const cartItem = (state - action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM-CART':
            return state.filter(cartItem=>cartItem.id !== action.payload.id)
    }
    return state
}

export default cartItem