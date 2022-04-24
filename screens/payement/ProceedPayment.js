import { StyleSheet,Button, Text, View,useWindowDimensions,KeyboardAvoidingView } from 'react-native'
import React,{useRef, useState} from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import * as Notifications from 'expo-notifications';
import { Paystack, paystackProps } from 'react-native-paystack-webview';
import StripeApp from './stripe/StripeApp.js';
import { StripeProvider } from '@stripe/stripe-react-native';
import { PayWithFlutterwave } from "flutterwave-react-native";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
    });

const ProceedPayment = ({navigation}) =>
{
    const handleNotification = () =>
    {
    Notifications.scheduleNotificationAsync({
    content: {
      title: "hi 😎there",
      body: 'it is time for your payment',
    },
    trigger: { seconds: 5 },
  });
}

     const widowWith = useWindowDimensions().height
    const padding = widowWith

     const paystackWebViewRef = useRef(paystackProps.PayStackRef); 
    return (
     <KeyboardAvoidingView behavior={`${padding}`} style={{flex:1,minHeight:widowWith}}>
            
    <View style={styles.container}>
          <View style={{flex:0.5,backgroundColor:"#fff",borderRadius:30,justifyContent:'space-around',alignItems:"center"}}>
                  <Text style={{fontSize:19,fontFamily:'robo',textAlign:"center",}}>Payment</Text>
                    <Button
                        title="Press to schedule a notification"
                        onPress={handleNotification}
      />
              <View style={{flex:0.5,justifyContent:'space-evenly'}}>
                    <View style={{justifyContent:"space-around"}}>
                        <Text style={{fontFamily:'robo'}}>Email</Text>
                        <TouchableOpacity style={{flex:0.6,borderRadius:15,width:300,height:15,backgroundColor:'#D1D1D1',justifyContent:"center",alignItems:"center"}}><TextInput  autoCapitalize='none' keyboardType='email-address' placeholder='email'/></TouchableOpacity>
                    </View>
                    <View style={{justifyContent:"space-around"}}>
                        <Text style={{fontFamily:'robo'}}>Amount</Text>
                        <TouchableOpacity style={{flex:0.6,borderRadius:15,width:300,backgroundColor:'#D1D1D1',justifyContent:"center",alignItems:"center"}}><TextInput  placeholder='enter amount'/></TouchableOpacity>
                    </View>
              </View>
                   <Paystack  
                        paystackKey="pk_test_965b964d3bda76e31fb4d254cc672ea103615cd2"
                        amount={'25000.00'}
                        billingEmail="paystackwebview@something.com"
                        activityIndicatorColor="green"
                        onCancel={(e) =>
                        {
                            console.log(e)
                            //  navigation.navigate('drawer') 
                        }}
                        onSuccess={(res) =>
                        {
                        // handle response here
                        }}
                        ref={paystackWebViewRef}
                        autoStart={false}
                    />
                    <TouchableOpacity onPress={()=>  paystackWebViewRef.current.startTransaction()} style={{ flex: 0.1, borderRadius: 10, width: 160, backgroundColor: '#14A5A1', justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff", fontFamily: "inconsolata", fontSize: 16 }}>Proceed Payment</Text></TouchableOpacity>
                    {/* <StripeProvider publishableKey='pk_test_51KmZ6wJTYLp9uVuoLj2PMClgIcKQlKLbn8sDV9atVKYPSpuI9femLRz44i3m47h83ObHXTxqnrTNry2v8a3vKDye00NVJoTnWX'>
                       <StripeApp />
                    </StripeProvider> */}
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