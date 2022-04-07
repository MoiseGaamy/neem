import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react';
import { DrawerActions } from "@react-navigation/native";
import { Ionicons, EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { LineChart } from 'react-native-chart-kit';

const OverView = ({ navigation }) =>
{
  const screenWidth = Dimensions.get('window').width;
  const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ]
  }]
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <View>
          <Text style={{fontFamily:'inconsolata',fontSize:16}}>$Gaamy</Text>
          <Text style={{fontFamily:'inconsolata',fontSize:16}}>Personal Account</Text>
        </View>
          <View style={{backgroundColor:"#FFBD01",width:100,height:30,borderRadius:15,justifyContent:"center",alignItems:"center"}}><TouchableOpacity onPress={()=> navigation.navigate('Proceed')}><Text style={{fontFamily:'inconsolata',fontSize:17}}>Payment</Text></TouchableOpacity></View>
         <TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}><Ionicons name="menu-outline" size={24} color="black" /></TouchableOpacity> 
        </View>
      <View style={styles.cardContainer}>
        {/* <View style={{flex:1,paddingHorizontal: 35}}>
             <View style={{backgroundColor:"#092235",flex:0.7,borderTopRightRadius:15,borderTopLeftRadius:15}}>
            <View style={{justifyContent:"space-evenly",flex:1,paddingHorizontal:20}}>
               <View>
              <Text style={{color:"#999"}}>Active Balance</Text>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:20,color:"#fff"}}>RP 100.123.000</Text>
                <EvilIcons name="eye" size={24} color="#999" />
              </View>
            </View>
            
            <View style={{justifyContent:"space-evenly",flex:0.5}}>
               <FontAwesome5 name="rockrms" size={24} color="#999" />
            <Text style={{fontSize:20,color:"#fff"}}>5342 4242 6789 1024</Text>
            <Text style={{color:"#999"}}>10/25</Text>
            </View>
           </View>
        </View>
        <View style={{backgroundColor:"#092235",flex:0.2,borderBottomRightRadius:15,borderBottomLeftRadius:15,borderTopWidth:0.5,borderTopColor:"#999"}}>
          
        </View>
        </View> */}
        <LineChart data={data}
          width={screenWidth}
          height={400}
          chartConfig={styles.chartConfig}
          bezier />
       
      </View>
      <View style={styles.addOns}>
        <TouchableOpacity onPress={()=> navigation.navigate('plan')} style={styles.btn}><Text style={{fontSize:20,color:'#EEEEEE',fontFamily:'inconsolata'}}>Pick A Plan</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('progress')} style={styles.btn}><Text style={{fontSize:20,color:'#EEEEEE',fontFamily:'inconsolata'}}>Check out Progress</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('investment')} style={styles.btn}><Text style={{fontSize:20,color:'#EEEEEE',fontFamily:'inconsolata'}}>Check out Investment</Text></TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

export default OverView

const styles = StyleSheet.create({
    container: {
        flex: 1,
  },
  headContainer: {
    flex:0.2,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems:"center"
  },
  cardContainer: {
    flex: 0.5,
  },
  addOns: {
    flex: 0.3,
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  btn: {
    width: 370,
    height: 60,
    backgroundColor: "#14A5A1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent:"center"
  },
  chartConfig:{
      backgroundColor: '#14A5A1',
      // backgroundGradientFrom: '#fb8c00',
      // backgroundGradientTo: '#ffa726',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
}
})