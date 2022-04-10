import React,{useState} from "react"
import { auth, fireDB } from './config.js';
import firebase from 'firebase';
import { Alert } from 'react-native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);




const userAuth = () =>
{
    const [check,setCheck]=useState(false)
     async function signUp(email, password)
    {  
         try{
             setCheck(true)
             await auth.createUserWithEmailAndPassword(email,password)
        } catch (error) {
            Alert.alert('there is something wrong!!',error.message)
        } finally{setCheck(false)}
    }

    async function signIn(email, password)
    
    {
         try {
             await auth.signInWithEmailAndPassword(email,password)
         } catch (error) {
             Alert.alert('there is something wrong!!',error.message)
         }   
    }
    async function google()
    {  
        try
        {
            let provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            
        } catch (error) {
            Alert.alert('there is something wrong!!',error.message)
        }
    }
    
    async function signOut ()
    {
        try {
           await auth.signOut()
        } catch (error) {
            Alert.alert('there is something wrong!!',error.message)
        }
    }

    return {signUp,signIn,signOut,google,check}
    
}

export default userAuth;