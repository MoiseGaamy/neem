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
} from "react-native";
import React, { useState, useRef } from "react";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { addGoal } from "../../redux/actions/userActions.js";

const Plan = ({ addGoal, navigation }) => {
  //  const widowWith = useWindowDimensions().height
  //   const padding = widowWith
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0);
  const [cont, setCont] = useState(20);
  const [name, setName] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedName, setSelectedName] = useState();

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
    showMode("date");
  };

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //  let exactMonth = months[date.getMonth()]
  const handleSubmit = () => {
    if (!amount && !cont && !date) {
      Alert.alert("the fields are not to be empty.");
    } else {
      const goal = {
        name,
        selectedName,
        amount,
        cont,
        date,
        selectedLanguage,
      };
      // console.log(goal)
      addGoal(goal);
      navigation.navigate("progress");
    }
    setName("");
    setAmount("");
    setCont("");
    setDate("");
    setSelectedLanguage("");
    setSelectedName("");
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={`${padding}`}
    //   style={{ flex: 1, minHeight: widowWith }}
    // >
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={{ fontSize: 22, fontFamily: "inconsolata" }}>
          Let's Create Your
        </Text>
        <Text
          style={{ fontSize: 22, lineHeight: 40, fontFamily: "inconsolata" }}
        >
          {" "}
          Saving Goal!
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <View
          style={{
            paddingHorizontal: 50,
            flex: 0.7,
            justifyContent: "space-around",
          }}
        >
          <View style={{ width: 320, height: 50 }}>
            <Text style={{ fontSize: 18, fontFamily: "inconsolata" }}>
              Goal Name
            </Text>
            <TouchableOpacity
              style={{
                height: 35,
                borderRadius: 30,
                backgroundColor: "#31efea",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                value={name}
                style={{ color: "#000" }}
                onChangeText={(text) => setName(text)}
                placeholder="goal name"
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "inconsolata",
                marginTop: 20,
              }}
            >
              Goal Target
            </Text>
            <Picker
              style={{ color: "#14A5A1" }}
              selectedValue={selectedName}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedName(itemValue)
              }
            >
              <Picker.Item
                label="Trip"
                value="https://images.unsplash.com/photo-1512289984044-071903207f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <Picker.Item
                label="Debt"
                value="https://images.unsplash.com/photo-1634128222187-18eababc763d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Picker.Item
                label="Rental"
                value="https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              />
            </Picker>
          </View>
          <View style={{ justifyContent: "space-evenly", flex: 0.5 }}>
            <Text style={{ fontSize: 18, fontFamily: "inconsolata" }}>
              Amount to Save
            </Text>
            <Text style={{ fontSize: 22, fontFamily: "robo" }}>
              {Math.floor(amount)} Ghs
            </Text>
            <Slider
              style={{ width: 500, height: 40 }}
              minimumValue={0}
              maximumValue={800.0}
              onValueChange={(value) => setAmount(Math.floor(value))}
              minimumTrackTintColor="#092235"
              maximumTrackTintColor="#000000"
            />
          </View>
          <View style={{ justifyContent: "space-evenly", flex: 0.5 }}>
            <Text style={{ fontSize: 18, fontFamily: "inconsolata" }}>
              Contribution
            </Text>
            <Text style={{ fontSize: 22, fontFamily: "robo" }}>
              {Math.floor(cont)} Ghs
            </Text>
            <Slider
              style={{ width: 500, height: 40 }}
              minimumValue={0}
              maximumValue={800.0}
              onValueChange={(value) => setCont(Math.floor(value))}
              minimumTrackTintColor="#092235"
              maximumTrackTintColor="#000000"
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontFamily: "inconsolata" }}>
              set Reminder
            </Text>
            <Picker
              style={{ color: "#14A5A1" }}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="day" value="day" />
              <Picker.Item label="week" value="wk" />
              <Picker.Item label="month" value="mth" />
            </Picker>
          </View>
          <View style={{ justifyContent: "space-evenly", flex: 0.3 }}>
            <Text style={{ fontSize: 18, fontFamily: "inconsolata" }}>
              Target Date
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#31efea",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={showDatepicker}
            >
              <Text
                style={{
                  fontFamily: "inconsolata",
                  color: "#999999",
                  fontSize: 18,
                }}
              >
                Click to Show date picker!
              </Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: "robo", fontSize: 17 }}></Text>
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
          <View
            style={{
              flex: 0.5,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                fontFamily: "inconsolata",
              }}
            >
              {" "}
              You will Save{" "}
              <Text style={{ fontSize: 19 }}>{amount}.00 Ghs</Text> by
            </Text>
            <Text style={{ fontSize: 30, color: "#fff" }}></Text>
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              flex: 0.3,
              flexDirection: "row",
              width: 350,
              height: 50,
              backgroundColor: "#fff",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons name="plus-thick" size={15} color="black" />
            <Text style={{ paddingHorizontal: 10 }}>Create a goal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
};

export default connect(null, { addGoal })(Plan);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9DEEB",
  },
  firstContainer: {
    flex: 0.2,
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  secondContainer: {
    flex: 0.8,
    backgroundColor: "#F4F6FC",
    borderTopLeftRadius: 80,
    justifyContent: "center",
  },
  thirdContainer: {
    flex: 0.3,
    backgroundColor: "#092235",
    borderTopLeftRadius: 80,
    paddingHorizontal: 50,
    justifyContent: "space-evenly",
  },
});

// {exactMonth} {date.getFullYear()}
//{date.toLocaleString()}
//{date.toDateString()}
