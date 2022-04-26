import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  TextInput,
  useWindowDimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  FlatList
} from "react-native";
import React, { useState, useRef } from "react";
import { EvilIcons, MaterialCommunityIcons,Ionicons,MaterialIcons,Foundation} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker as DataPicker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { addGoal } from "../../redux/actions/userActions.js";
import moment from "moment";
import { Picker } from 'react-native-woodpicker'

const Plan = ({ addGoal, navigation }) => {
  //  const widowWith = useWindowDimensions().height
  //   const padding = widowWith
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(moment().format("DD-MMM-yyyy"));
  const [name, setName] = useState("");
  const [purpose,setPurpose] = useState({
      id: 1, name: 'trip',
      iconType: "MaterialCommunityIcons",
      iconName: "airplane"
    })
  const [targetAmount, setTargetAmount] = useState(0);
  const [amountForContribution, setAmountForContribution] = useState(20);

  const [selectedReminder, setSelectedReminder] = useState({ label: "day", value: 1 });
  // const [pickedData, setPickedData] = useState();

  const data = [
    { label: "day", value: 1 },
    { label: "month", value: 2 },
    { label: "week", value: 3 },
  ];
 
   const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
     setDate(moment(currentDate).format("DD-MMM-yyyy"));
     console.log(moment(currentDate).format("DD-MMM-yyyy"));
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (dat) =>
  {
    setDate(moment(dat).format("DD-MMM-yyyy"))
    hideDatePicker();
  };
  const Data = [
    {
      id: 1, name: 'trip',
      icon: <MaterialCommunityIcons name='airplane' size={24} color='#A1E3D8' />,
      iconType: "MaterialCommunityIcons",
      iconName:  'airplane'
    },
    {
      id: 2, name: 'Debt',
      icon: <MaterialIcons name='attach-money' size={24} color='#A1E3D8' />,
      iconType: "MaterialIcons",
       iconName:  'attach-money'
    },
    {
      id: 3, name: 'Laptop',
      icon: <Foundation name='laptop' size={24} color='#A1E3D8' />,
      iconType: "Foundation",
      iconName:  'laptop'
    },
    {
      id: 4, name: 'Rent',
      icon: <MaterialIcons name='house' size={24} color='#A1E3D8' />,
      iconType: "MaterialIcons",
      iconName:  'house'
    },
    {
      id: 5, name: 'Mariage',
      icon: <Ionicons name='people-outline' size={24} color='#A1E3D8' />,
      iconType: "Ionicons",
      iconName:  'people-outline'
    },
    {
      id: 6, name: 'Other',
      icon: <EvilIcons name='question' size={24} color='#A1E3D8' />,
      iconType: "EvilIcons",
      iconName:"question"
    },
  ]
  //  let exactMonth = months[date.getMonth()]
  const handleSubmit = () => {
    if (!targetAmount && !amountForContribution && !date) {
      Alert.alert("the fields are not to be empty.");
    } else {
      const goal = {
        name,
        targetAmount,
        amountForContribution,
        date,
        selectedReminder,
        purpose
      };
      // console.log(goal)
      addGoal(goal);
      Alert.alert("Goal created Successfully");
      navigation.navigate("home");
    }
    setName("");
    setTargetAmount("");
    setAmountForContribution("");
    setDate("");
    setSelectedReminder("");
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={`${padding}`}
    //   style={{ flex: 1, minHeight: widowWith }}
    // >
    <SafeAreaView style={styles.container}>
      <View  style={styles.fstContainer}>
        {/* <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}> */}
          {/* <Text style={{fontSize:30, fontWeight: "bold", color: "#092235"}}>Goal Name</Text> */}
           {/* <TouchableOpacity> */}
          {/* <TextInput  style={{ paddingVertical: 16, borderRadius: 10,justifyContent:"center",alignItems:"center"}} placeholder="Enter a goal name"/> */}
          {/* </TouchableOpacity> */}
        {/* </View > */}
        {/* <View>
           <Text style={{fontSize:30, fontWeight: "bold", color: "#6FDFDF"}}>Select Purpose</Text>
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={Data} keyExtractor={(item) => item.id} renderItem={({ item }) => (<View style={{height:100,width:100,backgroundColor:"red",marginHorizontal:2,borderRadius:10}}><Text>{item.name}</Text></View> )}/>
        </View> */}
        <View style={[styles.subContainer, {flex: 1}]}>
          <Text style={{fontSize:30, fontWeight: "bold", color: "#092235"}}>Create a goal</Text>
        </View>
        <View style={[styles.subContainer, { flex: 2 }]}>
          <Text style={{color: "#092235", fontWeight: "bold", fontSize: 15}}>Goal name</Text>
          <TextInput value={name} onChangeText={(text)=> setName(text)}  style={{ fontSize: 30, fontWeight: "bold", paddingVertical: 16, borderRadius: 10,justifyContent:"center",alignItems:"center"}} placeholder="Enter a goal name" placeholderTextColor="#A1E3D8"/>
        </View>
        <View style={[styles.subContainer, { flex: 3 }]}>
          <Text style={{marginBottom: 4, color: "#092235", fontWeight: "bold", fontSize: 15}}>Purpose</Text>
          <FlatList horizontal showsHorizontalScrollIndicator={false}  data={Data} keyExtractor={(item) => item.id}  renderItem={({ item }) => <Item item={item} setPurpose={setPurpose} />}/>
        </View>
        <View style={[styles.subContainer, { flex: 2, flexDirection: "row" }]}>
          <View style={{flex: 1}}>
            <Text style={{color: "#092235", fontWeight: "bold", fontSize: 15}}>Target amount</Text>
            <TextInput keyboardType="number-pad" value={targetAmount} style={{fontSize: 30, fontWeight: "bold"}} onChangeText={(target)=>setTargetAmount(target)} placeholder="000 Ghs" placeholderTextColor="#A1E3D8"/>
          </View>

          <View style={{flex: 1}}>
            <Text style={{color: "#092235", fontWeight: "bold", fontSize: 15}}>Amount to contribute</Text>
            <TextInput keyboardType="number-pad" style={{fontSize: 30, fontWeight: "bold"}} value={amountForContribution} onChangeText={(contribute)=>setAmountForContribution(contribute)} placeholder="000 Ghs" placeholderTextColor="#A1E3D8" />
          </View>
        </View>
        <View style={[styles.subContainer, { flex: 1.5 }]}>
          <Text style={{color: "#092235", fontWeight: "bold", fontSize: 15}}>Set a reminder date</Text>   
            
           <Picker
        item={selectedReminder}
        items={data}
        onItemChange={setSelectedReminder}
        title="Data Picker"
        placeholder="Select Data"
        isNullable={false}
      //backdropAnimation={{ opacity: 0 }}
      //mode="dropdown"
      //isNullable
      //disable
    />
        </View>

        <View style={[styles.subContainer, { flex: 1.5 }]}>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={{color: "#092235", fontWeight: "bold", fontSize: 15}}>Set target date</Text>
            <Text style={{color: "#A1E3D8"}}>{date}</Text>
          </TouchableOpacity>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onChange={onChange}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
        </View>
       </View>
      <View style={styles.scdContainer}>
        <View >
         <Text style={{ color: "#A1E3D8", fontSize: 15 }}>You will Save <Text style={{ fontSize: 19 }}>{targetAmount}.00 Ghs</Text> by</Text>
        <Text style={{lineHeight:40,color: "#A1E3D8"}}>{ date}</Text>
        </View>
        <View>
           <TouchableOpacity onPress={handleSubmit} style={{borderRadius:15,width:150,height:50,backgroundColor:"#fff",flexDirection: "row",alignItems:"center",justifyContent:"center"}}>
             <MaterialCommunityIcons name="plus-thick" size={15} color="black" />
            <Text>Create goal</Text>
        </TouchableOpacity>
       </View>
       </View>
      
     
    </SafeAreaView>
    // </KeyboardAvoidingView>
  );
};

const Item = ({ item, setPurpose }) =>
{
  const [selected, setSelected] = useState(false)
  return <TouchableOpacity onPress={() =>
  {
    setSelected(!selected)
    let purpose = item
    delete purpose['icon']
    setPurpose(purpose)
  }} style={{ height: 100, width: 100, backgroundColor: selected ? "#3fafa6" : "#007976", marginHorizontal: 2, borderRadius: 10,alignItems:"center",justifyContent:"center" }}><Text style={{color:"#A1E3D8"}}>{item.name}</Text>{item.icon}</TouchableOpacity>
}

export default connect(null, { addGoal })(Plan);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  firstContainer: {
    flex: 0.1,
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  secondContainer: {
    flex: 0.9,
    backgroundColor: "#F4F6FC",
    borderTopLeftRadius: 80,
    // justifyContent: "center",
  },
  thirdContainer: {
    flex: 0.3,
    backgroundColor: "#092235",
    borderTopLeftRadius: 80,
    paddingHorizontal: 50,
    justifyContent: "space-evenly",
  },
  fstContainer: {
    // backgroundColor: "#efefef",
    flex: 0.9,
    paddingHorizontal: 16,
  },
  scdContainer: {
    flex: 0.1,
   backgroundColor: "#007976",
    // paddingHorizontal: 16,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  subContainer: {
    justifyContent: "center"
    // marginVertical: 8,
  }
});

// {exactMonth} {date.getFullYear()}
//{date.toLocaleString()}
//{date.toDateString()}
