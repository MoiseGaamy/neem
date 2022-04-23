import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalAchieved = ({ item }) =>
{
    const { icon, name, text,text1 } = item;
  return (
    <View style={styles.container}>
        <View style={{flex:1,backgroundColor:"#cfeef7",flexDirection: "row",width:380,height:130,borderRadius:20,margin:10}}>
            <View style={{ flex: 0.3,alignItems:"center",justifyContent:"center" }}>
                <View style={{ backgroundColor: "#fff", width: 100, height: 100, borderRadius: 100,justifyContent:"center",alignItems:"center" }}>
                    {icon}
                </View>
        </View>
            <View style={{ flex: 0.7,justifyContent:"center", alignItems:"center" }}>
                <Text style={{ fontSize: 18 }}>{name}</Text>
                <Text style={{ fontSize: 18, fontFamily: "inconsolata" }}>{text1}</Text>
                <Text style={{ fontSize: 20, fontFamily: "inconsolata",color:"#005555" }}>{text}</Text>
            </View>
            
        </View>
    </View>
  )
}

export default GoalAchieved

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#EEEEEE",
        // padding:10
    }
})