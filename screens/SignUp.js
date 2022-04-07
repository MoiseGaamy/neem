import { StyleSheet, Text, View, TouchableOpacity, TextInput,Keyboard, ScrollView, Image, KeyboardAvoidingView, Platform ,useWindowDimensions,Alert,ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import TypeWriter from "react-native-typewriter";
import userAuth from '../firebase/userAuth.js';
import { connect } from "react-redux"
import { signUp, registerError} from '../redux/actions/authActions.js';



const SignUp = ({ navigation,auth ,registerError,signUp}) =>
{
    const {check} = signUp
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [info,setInfo]=useState(null)
    const widowWith = useWindowDimensions().height;
    const padding = widowWith
      
    const emptyInput = () =>
    {
        setEmail('');
        setPassword('');
    }

    const handleSignUp = () =>
    {
        if (!email || !password)
        {
            registerError('you have forgotten one field')
        } else
        {
            signUp(email, password);
            emptyInput()
             navigation.navigate('drawer')
        }
    }
    const handleGoogle = () =>
    {
        google()
    }

    return (
       
            <KeyboardAvoidingView behavior={`${padding}`} style={{flex: 1,minHeight:widowWith }} >
                <ScrollView style={styles.container} contentContainerStyle={{flexGrow:1}}>
                    <View style={styles.firstCon}>
                        <View style={{justifyContent:"center",alignItems:"center"}}>
                          <TypeWriter typing={1} maxDelay={400} style={{fontSize:22,lineHeight:30,color:"#cfeef7",fontFamily:"roboSe"}}>Welcome To Neem Money</TypeWriter>
                          <Text style={{ fontSize: 16, color: "#cfeef7" }}>Spend Smater Save wisely</Text>
                        </View>
                        {/* <Image style={{width:"50%",height:"40%"}} source={require("../assets/nim.png")}/> */}
                    </View>
                    <View style={styles.secondCon}>
                        <View style={{ backgroundColor: "#fff", flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30,}}>
                            {/* <View style={styles.googleContainer}>
                                <TouchableOpacity onPress={handleGoogle} style={{backgroundColor:"#14A5A1",flexDirection:"row",justifyContent:"center",width:"90%",height:"30%",borderRadius:15,alignItems:"center"}}><Ionicons name="ios-logo-google" size={24} color="#fff" /><Text style={{color:"#cfeef7"}}>Continue with Google</Text></TouchableOpacity>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                                <View style={{borderBottomWidth:0.5,color:"#999",flex:0.4}}></View>
                                <Text style={{flex:0.1,textAlign:"center"}}>or</Text>
                                <View style={{borderBottomWidth:0.5,color:"#999",flex:0.4}}></View>
                            </View>
                            </View> */}
                           <ScrollView contentContainerStyle={{flexGrow:1}}>
                                <View style={styles.signContainer}>
                                <Text style={{ fontFamily: 'inconsolata', fontSize: 17 }}>signup with your email address</Text>
                                {auth.error.register && <Text style={{ color: "red" }}>{auth.error.register}</Text>}
                                <TouchableOpacity style={{ backgroundColor: "#cfeef7", flexDirection: "row", justifyContent: "flex-start", width: "90%", height: "20%", borderRadius: 15, alignItems: "center" }}><TextInput placeholder='Email' value={email} onChangeText={(email)=>setEmail(email)}/></TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: "#cfeef7", flexDirection: "row", justifyContent: "flex-start", width: "90%", height: "20%", borderRadius: 15, alignItems: "center" }}><TextInput placeholder='Password' value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true}/></TouchableOpacity>
                                     {<TouchableOpacity onPress={handleSignUp} style={{backgroundColor:"#14A5A1",flexDirection:"row",justifyContent:"center",width:"90%",height:"20%",borderRadius:15,alignItems:"center"}}>{check ? <ActivityIndicator color='blue'/>:<Text style={{color:"#cfeef7",fontSize:20,fontFamily:'inconsolata'}}>Sign Up</Text>}</TouchableOpacity>}
                                <View style={{flexDirection:"row",alignItems:"center"}}><Text style={{flex:0.5,justifyContent:"flex-end",fontFamily:'inconsolata',fontSize:15}}>Already Have Account?</Text><TouchableOpacity style={{flex:0.4}} onPress={()=> navigation.navigate('signin')}><Text style={{color:"#14A5A1",fontSize:15,fontFamily:'inconsolata'}}>Sign In</Text></TouchableOpacity></View>
                            </View>
                           </ScrollView>
                            </View>
                    </View>
            </ScrollView>
            </KeyboardAvoidingView>
  )
}

const mapStateToProp = (state) =>
{
    return {auth:state}
}

export default connect(mapStateToProp,{signUp,registerError})(SignUp)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#14A5A1",
    },
    firstCon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems:"center"
    },
    secondCon: {
        flex: 0.7,
    },
    googleContainer: {
        flex: 0.4,
        alignItems: "center",
        justifyContent:"space-evenly"
    },
    signContainer: {
        flex: 0.6,
        justifyContent: "space-around",
        alignItems:"center"
        
    }
})
