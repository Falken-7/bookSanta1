import React,{Component} from 'react'
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSidebarMenu extends Component{

    render(){
        return(
            <View>
            <View style = {{flex:1,justifyContent:'center'}}>
                <DrawerItems {...this.props}></DrawerItems>
            </View>
            <View> 
                <TouchableOpacity style = {{height:30,width:30, justifyContent:'center',padding:10}}
                onPress = {()=>{this.props.navigation.navigate("WelcomeScreen")
                    firebase.auth().signOut()
            }}
                >
                    <Text> Log Out</Text>
                </TouchableOpacity>

            </View>
            </View>
        )

    }
}