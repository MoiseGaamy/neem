import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Goal from '../Goal.js';
import { connect } from 'react-redux';

const Progress = ({goals,navigation}) =>
{
 console.log(goals)
  
  const data = [
    {
      id: 1,
      icon: <Ionicons name="home-outline" size={24} color="black" />,
      itemName: "newHome",
      monthLeft: "9 months left",
      startPrice: 15700,
      endPrice:37500
    },
    {
      id: 2,
      icon: <FontAwesome5 name="plane-departure" size={24} color="black" />,
      itemName: "trip to dubai",
      monthLeft: "5 months left",
      startPrice: 8500,
      endPrice:10000
    },
    {
      id: 3,
      icon: <MaterialCommunityIcons name="cash-refund" size={24} color="black" />,
      itemName: "Debt",
      monthLeft: "7 months left",
      startPrice: 40000,
      endPrice:80000
    },
  ]
  return (
    
        <View style={styles.container}>
          <View style={styles.firstContainer}>
            <View>
              <Text>You've Already Saved</Text>
              <Text style={{fontSize:25}}>30.500 Ghs</Text>
            </View>
            <View style={{ backgroundColor: "#999", width: 80, height: 60, borderRadius: 40 }}>
              <Image source={require('../../assets/profile.png')} style={{width:80,height:60,borderRadius:40}}/>
            </View>
        </View>
          <View style={styles.secondContainer}>
            <Text style={{flex:0.3}}>Your goals</Text>
            <View style={{flex:0.3,flexDirection:"row", justifyContent:"space-around"}}>
              <Text>All</Text>
               <TouchableOpacity onPress={()=> navigation.navigate('achieved')}><Text>Achieved</Text></TouchableOpacity>
            </View>
        </View>
          <View style={styles.thirdContainer}>
            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({ item }) => (<Goal item={item}/>)}/>
        </View>
        </View>
  )
}

const mapStateToProps = (state) =>
{
  return {
    goals:state.goals.goals
  }
}

export default connect(mapStateToProps)(Progress)

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:"#cfeef7",
  },
  firstContainer: {
    flex: 0.2,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center"
  
  },
  secondContainer: {
    flex: 0.1,
    // backgroundColor: "pink",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems:"center"
  },
  thirdContainer: {
    flex: 0.7,
    // backgroundColor:"grey"
  }
})