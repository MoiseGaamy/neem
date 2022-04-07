import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';


const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
          <View style={{flex:0.3,alignItems:"center",justifyContent:"space-evenly"}}>
              <AntDesign name="checkcircle" size={60} color="#58b24e" />
              <Text style={{fontSize:16}}>Success!</Text>
          </View>
          <View style={{flex:0.2,alignItems:"center",justifyContent:"space-evenly"}}>
              <Text>Add transactions on the web or in our</Text>
              <Text>mobile apps.You can also download a</Text>
              <Text>transaction file from your institution and</Text>
              <TouchableOpacity style={{borderWidth:1,borderColor:"#999",borderRadius:5,padding:7}}>
                  <Text style={{fontSize:17,color:"blue"}}>Add Another Account</Text>
              </TouchableOpacity>
          </View>
          <View></View>
      </View>
      <View style={styles.secondContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('home')} style={{backgroundColor:"#2986cc",width:80,height:35,justifyContent:"center",alignItems:"center",borderRadius:7}}>
              <Text style={{color:"#fff",fontSize:16}}>Done</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"yellow"
    },
    firstContainer: {
        flex: 0.9,
        backgroundColor: "grey",
        alignItems:"center"
    },
    secondContainer: {
        flex: 0.1,
        backgroundColor: "pink",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        paddingHorizontal:10
    }
})