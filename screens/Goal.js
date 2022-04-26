import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { EvilIcons, MaterialCommunityIcons,Ionicons,MaterialIcons,Foundation} from "@expo/vector-icons";

const Goal = ({ item }) =>
{
    const { id, purpose: {iconName, iconType}, name, targetAmount, selectedReminder,amountForContribution, monthLeft, startPrice, endPrice } = item
  
    let contribution;
    
    if (selectedReminder === 'month')
    {
        contribution = (amountForContribution * 30) / targetAmount
    } else if (selectedReminder === 'week')
    {
        contribution = ( amountForContribution * 7) / targetAmount
    } else
    {
        contribution = amountForContribution /targetAmount
    }

    const icon = () =>
    {
        switch (iconType)
        {
            case "EvilIcons":
                return <EvilIcons name={iconName} size={24} color='#A1E3D8' />
            
            case "Ionicons":
                return <Ionicons name={iconName} size={24} color='#A1E3D8' />
            
            case "MaterialIcons":
                return <MaterialIcons name={iconName} size={24} color='#A1E3D8' />
            
            case "Foundation":
                return <Foundation name={iconName} size={24} color='#A1E3D8' />

            case "MaterialCommunityIcons":
                return <MaterialCommunityIcons name={iconName} size={24} color='#A1E3D8' />
        }
    }
   
  return (
    <View key={id} style={styles.container}>
        <View style={{flex:1,backgroundColor:"#2dbdba",borderRadius:20}}>
              <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",height:100}}>    
            <View style={{flex:0.3,alignItems:"center",justifyContent:"center"}}>
                 <View style={{backgroundColor:"#069A8E",width:60,height:60,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
                {icon()}
                      </View> 
            </View>
            <View style={{flex:0.7,alignItems:"flex-start",justifyContent:"center"}}>
                <Text>{name}</Text>
                <Text>{monthLeft}</Text>
            </View> 
         </View>
         <View style={{flex:1,paddingLeft:30,height:50}}>
            
        <View style={{backgroundColor:"#203239",width:"100%",height:"15%",borderRadius:7,justifyContent:"center"}}>
                      <Progress.Bar progress={contribution} width={200} />
                      {/* <View style={{backgroundColor:"#E6D5B8",width:"60%",height:"20%",borderRadius:5}}></View> */}
             </View>
             <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                      <Text>{targetAmount}</Text>
                      <Text>{targetAmount - amountForContribution}</Text>
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