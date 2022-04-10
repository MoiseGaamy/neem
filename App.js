import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase/config.js';
import { Provider } from 'react-redux';
import { store,persistor } from './redux/store.js';
import AppContainer from './navigations/navigation.js';
import useFonts from "./hooks/useFonts.js"
import { PersistGate } from 'redux-persist/integration/react';


export default function App()
{
  const [IsReady, setIsready] = useState(false)
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
  
  const loadFonts = async () =>
  {
    await useFonts();
  }
  if (!IsReady)
  {
    return <AppLoading 
            startAsync={loadFonts}
            onFinish={()=> setIsready(true)}
            onError={()=>{}}
           />
  }
  const Stack = createNativeStackNavigator()
   
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
      </Provider>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
