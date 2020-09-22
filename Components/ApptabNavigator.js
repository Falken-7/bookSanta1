import React from 'react'
import {Image} from 'react-native'
import BookDonate  from '../screenss/bookDonate'
import BookRequest from  '../screenss/bookRequest'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
    donateBooks:{screen:BookDonate,
    navigationOptions:{tabBarIcon:<Image source = {require("../assets/request-list.png")}

     style = {{width:20,height:20}}/>,

    tabBarLabel:"Donate"}},
    
    requestBooks:{screen:BookRequest,
    navigationOptions:{tabBarIcon:<Image source  = {require("../assets/request-book.png")}
     style = {{width:20,height:20}}/>,
     
     tabBarLabel:"Request"
}
    }

})