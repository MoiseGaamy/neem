import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from '../screens/LogoScreen.js';
import SignUp from '../screens/SignUp.js';
import SignIn from '../screens/SignIn.js';
import HomeScreen from '../screens/HomeScreen.js';
import Detail from "../screens/Detail.js"
import MyDrawer from '../screens/Drawer/MyDrawer.js';
import Pay from "../screens/payement/Pay.js"
import AddUnlinked from '../screens/addAccounts/AddUnlinked.js';
import Success from '../screens/addAccounts/Success.js';
import { auth } from '../firebase/config.js';
import useFonts from "../hooks/useFonts.js"
import ProceedPayment from '../screens/payement/ProceedPayment.js';
import {connect} from "react-redux"
import Achieved from '../screens/Achieved.js';
import  Modal  from '../screens/Modal.js';


 function AppContainer()
{
  const [currentUser,setCurrentUser]= useState(null)

  useEffect(() =>
  {
    const subscriber = auth.onAuthStateChanged((user) =>
    {
      if (user && user.uid) setCurrentUser(user)
      else setCurrentUser(null)
    })
    return subscriber
  },[])
  
  
  const Stack = createNativeStackNavigator()
   
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="splash">
        {currentUser ? <>
          <Stack.Screen name="drawer" component={MyDrawer} options={{headerShown:false}}/>
          <Stack.Screen name="feed" component={Detail} />
          <Stack.Screen name="Proceed" component={ProceedPayment}  options={{headerShown:false}}/>
          <Stack.Screen name="Add Unlinked Account" component={AddUnlinked} />
            <Stack.Screen name="Add UnlinkedAccount" component={Success} />
          <Stack.Screen name="achieved" component={Achieved} options={{headerTitleAlign:"center"}}/>
          <Stack.Screen name="modal" component={Modal} options={{headerTitle:'Achievements',headerTitleAlign:"center"}}/>
          </> : <>
          <Stack.Screen name="splash" component={LogoScreen} options={{ headerShown:false}}/>
          <Stack.Screen name="signup" component={SignUp} options={{headerShown:false}}/>
          <Stack.Screen name="signin" component={SignIn} options={{headerShown:false}}/>
          </>}
          </Stack.Navigator>
      </NavigationContainer>
   
  );
}


export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
