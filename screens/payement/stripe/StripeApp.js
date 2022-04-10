import { StyleSheet, Text, View,TextInput,Alert,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CardField,useConfirmPayment } from '@stripe/stripe-react-native'


const API_URL = "http://10.0.2.2:5000"

const StripeApp = () =>
{
    const [email, setEmail] = useState()
    const [cardDetails, setCardDetails] = useState()
    const { confirmPayment, loading } = useConfirmPayment();
    
    const fetchPaymentIntentClientSecret = async () =>
    {
        const response = await fetch(`${API_URL}/
         create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const { clientSecret, error } = await response.json()
        return {clientSecret,error}
     }
    

    const handlePayPress = async () =>
    {
        if (!cardDetails?.complete || !email)
        {
            Alert.alert("Please enter complete card details and Email")
            return
        }

        const billingDetails = {
            email: email,
        };

        try {
            const { clientSecret, error } = await fetchPaymentIntentClientSecret();
            if (error)
            {
                console.log('Unable to process payment')
            } else
            {
                const { paymentIntent, error } = await confirmPayment(clientSecret, {
                    type: "card",
                    billingDetails:billingDetails
                });
                if (error)
                {
                    alert(`payment confirmatin Error ${error.message}`)
                } else if (paymentIntent)
                {
                    alert("payment Successful")
                    console.log("payment successful",paymentIntent)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <View style={styles.container}>
         <Text style={{fontSize:19,fontFamily:'robo',textAlign:"center",marginBottom:30}}>Payment</Text>
      <TextInput
      autoCapitalize='none'
      placeholder='E-mail'
      keyboardType='email-address'
      onChangeText={(text)=>setEmail(text)} 
      style={styles.input}
      />
      <CardField 
       postalCodeEnabled={true}
       placeholder={{
           number:"+4242 4242 4242 4242"
       }}
       cardStyle={styles.card}
       style={styles.cardContainer}
       onCardChange={cardDetails =>
              {
           setCardDetails(cardDetails)
       }}
      />
      <TouchableOpacity style={{ flex: 0.3, borderRadius: 10, width: 370, backgroundColor: '#14A5A1', justifyContent: "center", alignItems: "center" }}disabled={loading} onPress={handlePayPress}><Text>proceed Payment</Text></TouchableOpacity>
    </View>
  )
}

export default StripeApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin:20
    },
    input: {
        backgroundColor: "#efefef",
        borderColor: "#000000",
        borderRadius: 8,
        fontSize: 20,
        height: 50,
        padding:10
    },
    card: {
        backgroundColor: "#efefefef",  
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
        
    }
})