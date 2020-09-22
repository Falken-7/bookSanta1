import React,{Component} from 'react'
import  {Text,TouchableOpacity,View,StyleSheet,TextInput, Alert,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase , {firestore} from 'firebase'
import BookDonate from './bookDonate'
import db from '../config'
export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:'',
            isModalVisible:false,
            firstname:'',
            lastname:'',
            address:'',
            contact:'',
            confirmPassword:''
        }
    }
showModal= ()=> {
    return (<Modal animationType = "fade" transparent = {true} visible = {this.state.isModalVisible}>
        <View style = {{
            flex:1,
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:'#ffffff',
            marginRight:30,
            marginLeft:30,
            marginTop:80,
            marginBottom:80
            }}>
              <ScrollView style = {{
                  width:'100%',
              }}><KeyboardAvoidingView style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style = {{fontSize:30,fontWeight:"bold"}}>Registration</Text>
                  <TextInput style = {{
                      width:"75%",
                      height:35,
                      alignSelf:'center',
                      borderColor:'#ffab91',
                      borderRadius:10,
                      borderWidth:1,
                      marginTop:20,
                      padding:10
                  }}
                  placeholder= {"First Name"}
                  maxLength = {8}
                 onChangeText = {(text)=>{this.setState({firstname:text})}} 
                  ></TextInput>
                  <TextInput style = {{
                      width:"75%",
                      height:35,
                      alignSelf:'center',
                      borderColor:'#ffab91',
                      borderRadius:10,
                      borderWidth:1,
                      marginTop:20,
                      padding:10
                  }}
                  placeholder= {"last Name"}
                  maxLength = {8}
                 onChangeText = {(text)=>{this.setState({lastname:text})}}></TextInput>
                                   <TextInput style = {{
                      width:"75%",
                      height:35,
                      alignSelf:'center',
                      borderColor:'#ffab91',
                      borderRadius:10,
                      borderWidth:1,
                      marginTop:20,
                      padding:10
                  }}
                  placeholder= {"Address"}
                  multiline = {true}
                 onChangeText = {(text)=>{this.setState({address:text})}}></TextInput>
                <TextInput style = {{
                      width:"75%",
                      height:35,
                      alignSelf:'center',
                      borderColor:'#ffab91',
                      borderRadius:10,
                      borderWidth:1,
                      marginTop:20,
                      padding:10
                  }}
                  placeholder= {"Contact Number"}
                  keyboardType = {'numeric'}
                 onChangeText = {(text)=>{this.setState({contact:text})}}></TextInput>
                 <TextInput style = {{
                      width:"75%",
                      height:35,
                      alignSelf:'center',
                      borderColor:'#ffab91',
                      borderRadius:10,
                      borderWidth:1,
                      marginTop:20,
                      padding:10
                  }}
                  placeholder= {"Email-address"}
                  keyboardType = {"email-address"}
                 onChangeText = {(text)=>{this.setState({email:text})}}></TextInput>
                 <TextInput style = {{
                      width:"75%",
                      height:35,
                      alignSelf:'center',
                      borderColor:'#ffab91',
                      borderRadius:10,
                      borderWidth:1,
                      marginTop:20,
                      padding:10
                  }}
                  placeholder= {"Password"}
                  secureTextEntry = {true}
                 onChangeText = {(text)=>{this.setState({password:text})}}></TextInput>
                 <TextInput style = {{
                      width:"75%",
                      height:35,
                      alignSelf:'center',
                      borderColor:'#ffab91',
                      borderRadius:10,
                      borderWidth:1,
                      marginTop:20,
                      padding:10
                  }}
                  placeholder= {"Confirm Password"}
                  secureTextEntry  ={true}
                 onChangeText = {(text)=>{this.setState({confirmpPassword:text})}}></TextInput>
        
        <View>
            <TouchableOpacity style = {{width:200,
                height:40,
                alignItems:'center',
                justifyContent:'center',
                borderWidth:1,
                borderRadius:10,
                marginTop:30}}
                onPress = {()=>{this.signUp(this.state.email,this.state.password,this.state.confirmPassword)}}
                > 
                <Text>Register</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style = {{width:200,
                height:40,
                alignItems:'center',
                justifyContent:'center',
                borderWidth:1,
                borderRadius:10,
                marginTop:30}}
                onPress = {()=>{this.setState({isModalVisible :false})}}>
            
            <Text>Cancel</Text>
            </TouchableOpacity>

                
        </View>
                  </KeyboardAvoidingView></ScrollView>  
            </View>
            
    </Modal>)
}    
login = (email,password)=>{
   
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        this.props.navigation.navigate('donateBooks')
        
    }).catch((error)=>{
        var errorCode = error.code
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })
} 
signUp = (email,password,confirmPassword)=>{
    if(password !== confirmPassword){
        Alert.alert("Passwords Dosen't Match")
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        return Alert.alert("user added Succesfully",'',
        [{text:'ok',onPress:()=>this.setState({"isModalVisible":false})}])

    }).catch((error)=>{
        var errorCode = error.code
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    }
    )
}
}   
    render(){

        return(

            <View>
                <View>{this.showModal()}</View>
            <View>
                <Text style = {{fontWeight:"bold",fontSize:30,color:"blue"}}>Book Santa</Text>
                <TextInput style = {{width:300,borderWidth:1,height:20,margin:10}}
                    placeholder = "abc@example.com"
                    keyboardType = "email-address"
                    onChangeText = {(text)=>{this.setState({email:text})}}></TextInput>
                <TextInput style = {{fontWeight:"bold",fontSize:30,color:"blue"}}
                placeholde='enter Password'
                secureTextEntry = {true}
                onChangeText = {(text)=>{this.setState({password:text})}}></TextInput>
            </View>
            <View>
                <TouchableOpacity style = {{height:30,width:200,marginTop:30}}
                onPress = {()=>{this.login(this.state.email,this.state.password)}}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{height:30,width:200,marginTop:30}}
                onPress = {()=>{this.setState({isModalVisible:true})}}
                >
                    <Text>SignUp</Text>
                </TouchableOpacity>

            </View>
            </View>
        )
        }
}