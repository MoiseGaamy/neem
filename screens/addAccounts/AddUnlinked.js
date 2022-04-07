import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

const AddUnlinked = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
          <View>
              <Text><Text style={{color:"#000"}}>Let's go!</Text> And don't worry-if you change your mind,you</Text>
              <Text>can link your account at any time.</Text>
          </View>
          <View>
              <Text style={{lineHeight:30,fontSize:16}}>Give it a nickname</Text>
              <TextInput style={{borderWidth:1,borderColor:"#000",height:40,borderRadius:10}} placeholder='nickname'/>
          </View>
         <View>
              <Text style={{lineHeight:30,fontSize:16}}>what is your current account balance?</Text>
              <TextInput style={{borderWidth:1,borderColor:"#000",height:40,borderRadius:10}} placeholder='current balance'/>
          </View>
      </View>
      <View style={styles.secondContainer}>
         <TouchableOpacity onPress={()=> navigation.navigate('Add UnlinkedAccount')} style={{flex:0.1,backgroundColor:"#999",width:80, justifyContent:"center",borderRadius:7}}>
             <Text style={{textAlign:'center'}}>Next</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddUnlinked

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"yellow"
    },
    firstContainer: {
        flex: 0.4,
        backgroundColor: "green",
        justifyContent: "space-evenly",
        paddingHorizontal:15
    },
    secondContainer: {
        flex: 0.6,
        backgroundColor: "pink",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin:15
    }
})