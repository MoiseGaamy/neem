import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, useWindowDimensions,Alert,ActivityIndicator} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import TypeWriter from "react-native-typewriter";
import React,{useState} from 'react'
import userAuth from '../firebase/userAuth.js';
import {connect} from "react-redux"


const SignIn = ({ navigation }) =>
{   
    const { signIn } = userAuth()
    const [email,setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    
    const widowWith = useWindowDimensions().height
    const padding = widowWith

    const startLoading = () =>
    {
        setLoading(true);
        setTimeout(() =>
        {
            setLoading(false)
        },3000)
    }

    const emptyInput = () =>
    {
        setEmail('');
        setPassword('');
    }

    const handleSignIn = () =>
    {
        if (!email || !password)
        {
            Alert.alert('you are missing a field')
        } else
        {
            signIn(email, password)
            emptyInput()
            // setLoading()
            navigation.navigate('drawer')
        }
    }
    return (
      <KeyboardAvoidingView behavior={`${padding}`} style={{flex:1,minHeight:widowWith}}>
              <View style={styles.container}>
        <View style={{flex:0.2}}>
            <View style={{justifyContent:"center",alignItems:"center"}}>
                          <TypeWriter typing={1} maxDelay={400} style={{fontSize:22,lineHeight:30,color:"#cfeef7",fontFamily:"roboSe"}}>Welcome To Neem Money</TypeWriter>
                          <Text style={{ fontSize: 16, color: "#cfeef7" }}>Spend Smater Save wisely</Text>
            </View>
        </View>
          <View style={{backgroundColor:"#fff",flex:0.5,borderRadius:30}}>
                 {/* <View style={styles.googleContainer}>
                  <TouchableOpacity style={{flex:0.7,backgroundColor:"#14A5A1",flexDirection:"row",justifyContent:"center",width:"90%",borderRadius:15,alignItems:"center"}}><Ionicons name="ios-logo-google" size={24} color="#fff" /><Text style={{color:"#cfeef7"}}>Continue with Google</Text></TouchableOpacity>
                  <View style={{flex:0.2,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                      <View style={{borderBottomWidth:0.5,color:"#999",flex:0.4}}></View>
                      <Text style={{flex:0.1,textAlign:"center"}}>or</Text>
                      <View style={{borderBottomWidth:0.5,color:"#999",flex:0.4}}></View>
                   </View>
                  </View> */}
                  <View style={styles.signContainer}>
                        <Text>signIn with your email address</Text>     
                        <TouchableOpacity style={{ backgroundColor: "#cfeef7", flexDirection: "row", justifyContent: "flex-start", width: '90%', borderRadius: 15, alignItems: "center", height: '20%' }}><TextInput placeholder='Email' value={email} onChangeText={(email)=>setEmail(email)}/></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#cfeef7", flexDirection: "row", justifyContent: "flex-start", width: '90%', borderRadius: 15, alignItems: "center", height: '20%' }}><TextInput placeholder='Password' value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true}/></TouchableOpacity>
                        <TouchableOpacity onPress={handleSignIn} style={{ backgroundColor: "#14A5A1", flexDirection: "row", justifyContent: "center", width: '90%', borderRadius: 15, alignItems: "center", height: '20%' }}><Text style={{color:"#cfeef7",fontSize:18}}>Sign In</Text></TouchableOpacity>   
                  </View>
        </View>
     
    </View>
      </KeyboardAvoidingView>
   
  )
}

export default connect({},{})(SignIn)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#14A5A1",
        justifyContent:"center"
    },
     googleContainer: {
        flex: 0.2,
        alignItems: "center",
        justifyContent:"space-around",
        // backgroundColor:"yellow"
    },
    signContainer: {
        flex: 0.9,
        justifyContent: "space-evenly",
        alignItems: "center",
        // backgroundColor:"green"
        
    }
})
