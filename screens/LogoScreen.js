import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from "lottie-react-native"
import { AntDesign } from '@expo/vector-icons';


const LogoScreen = ({navigation}) =>
{
    let animation = React.createRef();
    useEffect(() =>
    {
       animation.current.play() 
    },[])

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
          <Image style={{width:"100%", height:"100%"}} source={require("../assets/n.png")} />
        </View>
          <View style={styles.secondContainer}>
              <LottieView
                    ref={animation}
                    style={{
                        width: 250,
                      height: 250,
                    }}
                    source={require('../assets/money.json')}
        />
          </View>
      <View style={styles.thirdContainer}><TouchableOpacity onPress={()=> navigation.navigate('signup')} style={{width:75,height:75,borderRadius:35,backgroundColor:"#14A5A1",justifyContent:"center",alignItems:"center"}}><AntDesign name="arrowright" size={40} color="#fff" /></TouchableOpacity></View>
    </View>
  )
}

export default LogoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    firstContainer: {
      flex: 0.4,
      justifyContent:"center",
    },
    secondContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems:"center"
        
    },
    thirdContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems:"center"
        
    },
    // animationContainer: {
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flex: 0.5,
    // }
  
})