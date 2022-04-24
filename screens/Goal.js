import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const Goal = ({ item }) =>
{
    const { id, icon, name, targetAmount, selectedReminder,amountForContribution, monthLeft, startPrice, endPrice } = item
  
    let contribution;
    let target = Number(targetAmount);
    let contribu = Number(amountForContribution);
    if (selectedReminder === 'mth')
    {
        contribution = (contribu * 30) / target
        console.log(contribution)
    } else if (selectedReminder === 'wk')
    {
        contribution = ( contribu * 7) / target
    } else
    {
        contribution = contribu /target
    }

   
  return (
    <View key={id} style={styles.container}>
        <View style={{flex:1,backgroundColor:"#2dbdba",borderRadius:20}}>
              <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",height:100}}>    
            <View style={{flex:0.3,alignItems:"center",justifyContent:"center"}}>
                 <View style={{backgroundColor:"grey",width:60,height:60,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
                <Text>{icon}</Text>
            </View> 
            </View>
            <View style={{flex:0.7,alignItems:"flex-start",justifyContent:"center"}}>
                <Text>{name}</Text>
                <Text>{monthLeft}</Text>
            </View> 
         </View>
         <View style={{flex:1,paddingLeft:30,height:50}}>
            
        <View style={{backgroundColor:"#203239",width:"100%",height:"15%",borderRadius:7,justifyContent:"center"}}>
                      <Progress.Bar progress={contribu} width={200} />
                      {/* <View style={{backgroundColor:"#E6D5B8",width:"60%",height:"20%",borderRadius:5}}></View> */}
             </View>
             <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                      <Text>{targetAmount}</Text>
                      <Text>{amountForContribution}</Text>
             </View>
             
         </View>
              
        </View>
        
    </View>
  )
}

export default Goal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "orange",
        padding: 15,

    },
})