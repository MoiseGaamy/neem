import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native'
import React,{useState} from 'react';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import {connect} from "react-redux"

const Plan = () =>
{
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const [selectedLanguage, setSelectedLanguage] = useState();

   const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

     const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
         <Text style={{fontSize:22,fontFamily:'inconsolata'}}>Let's Create Your</Text>
         <Text style={{fontSize:22,lineHeight:40,fontFamily:'inconsolata'}}> Saving Goal!</Text>
     </View>
      <View style={styles.secondContainer}>
        <View style={{paddingHorizontal:50,flex:0.7}}>
            <View style={{justifyContent:"space-evenly",flex:0.3}}>
          <Text style={{fontSize:18,fontFamily:'inconsolata'}}>Amount to Save</Text>
          <Text style={{ fontSize: 22,fontFamily:'robo' }}>$37.500</Text>
           <Slider
          style={{width: 500, height: 40}}
          minimumValue={0}
          maximumValue={800.000}
          minimumTrackTintColor="#092235"
          maximumTrackTintColor="#000000"
        />
         </View>
        <View style={{justifyContent:"space-evenly",flex:0.3}}>
          <Text style={{fontSize:18,fontFamily:'inconsolata'}}>Contribution</Text>
          <Text style={{ fontSize: 22 ,fontFamily:'robo'}}>$1.500</Text>
           <Slider
          style={{width: 500, height: 40}}
          minimumValue={0}
          maximumValue={800.000}
          minimumTrackTintColor="#092235"
          maximumTrackTintColor="#000000"
        />
          </View>
          <View>
            <Text style={{fontSize:18,fontFamily:'inconsolata'}}>set Reminder</Text>
            <Picker
              style={{color:'#14A5A1'}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="day" value="day" />
                <Picker.Item label="week" value="wk" />
                <Picker.Item label="month" value="mth" />
              </Picker>
          </View>
        <View style={{justifyContent:"space-evenly",flex:0.3}}>
          <Text style={{fontSize:18,fontFamily:'inconsolata'}}>Target Date</Text>
          <TouchableOpacity style={{backgroundColor:"#31efea",justifyContent:"center",alignItems:"center"}}  onPress={showDatepicker}>
              <Text style={{fontFamily:"inconsolata",color:"#999999",fontSize:18}}>Click to Show date picker!</Text> 
      </TouchableOpacity>
           <Text style={{fontFamily:"robo",fontSize:17}}>{date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
        </View>
         </View>
        <View style={styles.thirdContainer}>
          <View style={{flex:0.5,justifyContent:"space-evenly",alignItems:"center"}}>
            <Text style={{color:"#fff",fontSize:16,fontFamily:"inconsolata"}}> You will Save $37.500 by</Text>
            <Text style={{ fontSize: 30, color: "#fff" }}>{months[date.getMonth()]} {date.getFullYear()}</Text>
        </View>
        <TouchableOpacity style={{flex:0.3,flexDirection:"row", width:350,height:50,backgroundColor:"#fff",borderRadius:20,alignItems:"center",justifyContent:"center"}}><MaterialCommunityIcons name="plus-thick" size={15} color="black" /><Text style={{paddingHorizontal:10}}>Create a goal</Text></TouchableOpacity>
     </View>
     </View>
    </View>
  )
}

export default connect({},{}) (Plan)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: "#D9DEEB",
  },
  firstContainer: {
    flex: 0.2,
    justifyContent: "center",
    paddingHorizontal:50
  },
  secondContainer: {
    flex: 0.8,
    backgroundColor: "#F4F6FC",
    borderTopLeftRadius: 80,
    justifyContent:"center"
  },
  thirdContainer: {
    flex: 0.3,
    backgroundColor: "#092235",
      borderTopLeftRadius: 80,
    paddingHorizontal: 50,
    justifyContent:"space-evenly"
  }
})