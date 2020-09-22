import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './ApptabNavigator'
import CustomSidebarMenu from './customSideBarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator}
    
},{contentComponent:CustomSidebarMenu},
{intialRouteName:'Home'}

)