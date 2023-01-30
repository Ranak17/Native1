import React, { Component, useEffect, useState } from 'react'
import { CheckBox,Text, View,StatusBar, TextInput ,StyleSheet,Image,FlatList} from 'react-native';
import Flatlist from '../Awesome2/src/components/Flatlist';
import LoginForm from '../Awesome2/src/components/LoginForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App(){
  const Stack= createNativeStackNavigator()
;
  return(     
  // <Flatlist />
  // <LoginForm />
  <NavigationContainer>
  <Stack.Navigator initialRouteName='Login'>
<Stack.Screen name='Login' component={LoginForm}/>
<Stack.Screen name="userProfile" component={Flatlist}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}


export default App;
