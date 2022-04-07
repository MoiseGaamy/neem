import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react';
import { AntDesign,Feather,Ionicons  } from '@expo/vector-icons';


const Unlinked = ({navigation}) => {
  return (
    <View style={styles.container}>
          <View style={styles.firstContainer}>
              <View style={styles.link}>
                   <View style={{flex:0.7,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"green",margin:15}}>
                      <Ionicons name="cloud-download-outline" size={24} color="black" />
                     <View>
                      <Text style={{lineHeight:30}}>Linked</Text>
                      <Text>Connect to your bank and automatically</Text>
                      <Text>import transactions.</Text>
                     </View>
                    </View>
                    <View style={{flex:0.3,justifyContent:"space-evenly",flexDirection:"row",alignItems:"center"}}>
                      <View style={{borderBottomWidth:0.3,borderColor:"#000",flex:0.4, }}></View>
                      <Text>or</Text>
                      <View style={{borderBottomWidth:0.3,borderColor:"#000",flex:0.4, }}></View>
                  </View>
              </View>
              <View style={styles.unlinked}> 
                   <TouchableOpacity onPress={()=>navigation.navigate('Add Unlinked Account')} style={{flex:0.3,backgroundColor:"grey",flexDirection:"row",justifyContent:"space-evenly",margin:15,alignItems:"center"}}>
                    <Feather name="edit" size={24} color="black" />
                     <View>
                      <Text>Unlinked</Text>
                      <Text style={{lineHeight:30}}>Start with your current balance and enter</Text>
                      <Text>your own transactions.</Text>
                      </View>
                   </TouchableOpacity>
              </View>
        </View>
          <View style={styles.lastContainer}>
              <AntDesign name="infocirlce" size={24} color="black" />
              <Text>Linked or Unlinked? Learn more to help you decide</Text>
        </View>
    </View>
  )
}

export default Unlinked

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "yellow"
    },
    firstContainer: {
        flex: 0.9,
        backgroundColor:"green"
  },
  link: {
    flex:0.3,
      backgroundColor:"pink"
  },
  unlinked: {
    flex: 0.7,
    backgroundColor:"yellow"
  },
    lastContainer: {
      flex: 0.1,
      backgroundColor: "pink",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems:"center"
    }
})