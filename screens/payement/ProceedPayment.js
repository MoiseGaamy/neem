import { StyleSheet, Text, View,useWindowDimensions,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'

const ProceedPayment = () =>
{
     const widowWith = useWindowDimensions().height
    const padding = widowWith
    return (
     <KeyboardAvoidingView behavior={`${padding}`} style={{flex:1,minHeight:widowWith}}>
            
    <View style={styles.container}>
          <View style={{flex:0.5,backgroundColor:"#fff",borderRadius:30,justifyContent:'space-evenly',alignItems:"center"}}>
                  <Text style={{fontSize:19,fontFamily:'robo'}}>Payment</Text>
              <View style={{flex:0.5,justifyContent:'space-evenly'}}>
                    <View style={{justifyContent:"space-around"}}>
                        <Text style={{fontFamily:'robo'}}>Email</Text>
                        <TouchableOpacity style={{flex:0.6,borderRadius:15,width:300,height:15,backgroundColor:'#D1D1D1'}}><TextInput placeholder='email'/></TouchableOpacity>
                    </View>
                    <View style={{justifyContent:"space-around"}}>
                        <Text style={{fontFamily:'robo'}}>Amount</Text>
                        <TouchableOpacity style={{flex:0.6,borderRadius:15,width:300,backgroundColor:'#D1D1D1'}}><TextInput placeholder='enter amount'/></TouchableOpacity>
                    </View>
              </View>
              <TouchableOpacity style={{flex:0.1,borderRadius: 10, width: 160, backgroundColor: '#14A5A1',justifyContent:"center",alignItems:"center" }}><Text style={{color:"#fff",fontFamily:"inconsolata",fontSize:16}}>Proceed Payment</Text></TouchableOpacity>
         </View>
    </View>
     </KeyboardAvoidingView> 
  )
}

export default ProceedPayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14A5A1',
        justifyContent: 'center',
    }
})