import React, { useState } from 'react';
import {View,Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Image,Keyboard, ScrollView, KeyboardAvoidingView, Alert} from 'react-native';
import { Button } from 'react-native-web';
// import { TouchableOpacity } from 'react-native-web';
// import { TextInput } from 'react-native-web';

export default function LoginForm({navigation}) {
  const [name,setName]=useState("");
  const [pswd,setPswd]=useState("");
  // console.log("name "+name);
  // console.log("pswd "+pswd);
  function submit(){
    if((name=="karan") && (pswd=="pass")){
      navigation.navigate('userProfile',{userName:name});
    }else{
      Alert.alert("username or passweord is incorrect");
    }
  }
  return (
    // <KeyboardAvoidingView behavior='padding'>
    <ScrollView>
    <View style={{flex:1}}>
        <StatusBar backgroundColor={"gray"}/>
        <View >
          <View style={{height:250,alignItems:'center',justifyContent:'center'}}>
            <View style={{height:200,width:200,borderRadius:100,overflow:'hidden'}}>
            <Image style={{backgroundColor:'pink',height:'100%',width:'100%'}} source={require('../../assets/1st.jpg')} /></View>
          </View>
          <View style={{alignItems:'center',marginTop:5}}><Text style={{fontSize:30}}>Login Form</Text></View>
          <View style={{marginTop:30,marginHorizontal:10}}>
            <Text style={{fontSize:18,marginVertical:10}}>Enter Your Name</Text>
            <TextInput style={styles.inptField}
            autoCapitalize="none"
            autoCorrect={false}
            // placeholder="Karan"
            value={name}
            onChangeText={(ele)=>{setName(ele)}}
            />
          </View>
          <View style={{marginTop:20,marginHorizontal:10}}>
            <Text style={{fontSize:18,marginVertical:10}} onPress>Enter Your Password</Text>
            <TextInput  style={styles.inptField}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={pswd}
            onChangeText={(ele)=>{setPswd(ele)}}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>{submit()}}><Text style={styles.btnTxt}> Sign in</Text></TouchableOpacity>
          <View style={{marginHorizontal:10}}><Text style={{fontSize:17}}>If You are new then please <Text style={{color:'blue'}}>Sign Up</Text></Text></View>
        </View>
    </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  )
}


const styles=StyleSheet.create({
  inptField:{
    fontSize:18,
    // backgroundColor:'pink',
     borderWidth:1,
     paddingLeft:8,
     borderColor:'gray',
     height:40,
     marginVertical:5,
  borderRadius:5,
  // borderColor:'gray'
  },
  btn:{
    backgroundColor:'pink',
  height:40,
  justifyContent:'center',
  alignItems:'center',
  marginHorizontal:10,
  marginTop:20,
  backgroundColor:'#1DB8DD',
  borderRadius:5
  },
  btnTxt:{
    fontSize:18,
    color:'white'
  }
})