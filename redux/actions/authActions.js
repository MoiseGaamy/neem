import React,{useState} from "react"
import { auth } from "../../firebase/config.js";
import firebase from 'firebase';
import { Alert } from 'react-native';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Setting a timer'])


 
     export  function signUp(email, password)
     {  
        
         return async (dispatch) =>
         {
            //   const [check, setCheck] = useState(false)
            try{
            //  setCheck(true)
                 await auth.createUserWithEmailAndPassword(email, password)
                // dispatch({
                //     type: "LOGGED_IN",
                //     payload:user
                // })
        } catch (error) {
            Alert.alert('there is something wrong!!',error.message)
            }
            // finally { setCheck(false) }
            //  return check
         }
         
    }

    export  function signIn(email, password)
    
    {
        return async (dispatch) =>
        {
            try {
                 await auth.signInWithEmailAndPassword(email, password)
                // dispatch({
                //     type: "LOGGED_IN",
                //     payload:user
                // })
         } catch (error) {
             Alert.alert('there is something wrong!!',error.message)
         }   
        }
         
    }
    export  function google()
    {  

        return async () =>
        {
             try
        {
            let provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            
        } catch (error) {
            Alert.alert('there is something wrong!!',error.message)
        }
        }
       
    }
    
    export  function signOut ()
    {
        return async (dispatch) =>
        {
            try {
                await auth.signOut()
                // dispatch({
                //     type: "LOGGED_OUT"
                // })
            } catch (error) {
            Alert.alert(error.message)
            }   
        }
       
}
    

// export function registerError(error)
// {
//     return {
//         type: "REGISTER_ERROR",
//         payload: error
//     }
// }
// export function loginError(error)
// {
//     return {
//         type: "LOGGIN_ERROR",
//         payload: error
//     }
// }



    


