import { StyleSheet, Text, View,FlatList, TouchableOpacity,Alert, Modal,Pressable } from 'react-native'
import React, { useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import GoalAchieved from './GoalAchieved.js';
import ProceedPayment from './payement/ProceedPayment.js';
import { PayWithFlutterwave } from "flutterwave-react-native";

const Achieved = ({navigation}) =>
{
    const [modalVisible, setModalVisible] = useState(false);
    const Data = [
        {
            id: 1,
            icon: <MaterialIcons name="done" size={50} color="#00C897" />,
            name: "Trip to Dubai",
            text1:"Goal Completed",
            text:" withdraw money"
            
        },
        // {
        //     id: 2,
        //     icon: <MaterialIcons name="done" size={50} color="#00C897" />,
        //     name: "Computer",
        //     text:"Goal Completed"
            
        // },
        // {
        //     id: 3,
        //     icon: <MaterialIcons name="done" size={50} color="#00C897" />,
        //     name: "Debt Settlement",
        //     text:"Goal Completed"
            
        // },
    ]
     const transactionReference = (length) => {
    let arr =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(
        ""
      );
    let mainArr = [];
    for (let i = 0; i < length; i++) {
      let ranIndex = (Math.random() * (arr.length - 1)).toFixed(0);
      mainArr[i] = arr[ranIndex];
    }
    return mainArr.join("");
  };
  const options = {
    tx_ref: transactionReference(10),
    authorization: "FLWPUBK_TEST-a87c7da2424703de6142adba57ded237-X",
    customer: {
      email: "flokygamy@gmail.com",
    },
    amount: 2000,
    currency: "GHS",
    payment_options: "mobilemoneyghana",
  };
  const handleOnRedirect = (data) => {
    console.log(data);
  };
  return (
      <View style={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{flex:0.4}}>
                        <ProceedPayment />
                    </View>
                    <View style={{flex:1}}>
                        <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Transaction Done</Text>
                    </Pressable>
                    </View>
                </View>
                </View>
            </Modal>
            <View style={{flex:1,backgroundColor:"#14A5A1",opacity:0.8}}>
        <FlatList data={Data} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <PayWithFlutterwave
                onRedirect={(data) => handleOnRedirect(data)}
                options={options} customButton={(props) => (
                  <TouchableOpacity
                    // style={{
                    //   justifyContent: "center",
                    //   backgroundColor: "#fff",
                    //   width: 310,
                    //   height: 70,
                    //   borderRadius: 60,
                    //   alignItems: "center",
                    // }}
                    onPress={props.onPress}
                    isBusy={props.isInitializing}
                    disabled={props.disabled}
              >
                <GoalAchieved item={item} />
              </TouchableOpacity>
            )} /> )}
          />
          </View>
      </View>
  )
}

export default Achieved

const styles = StyleSheet.create({
     centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
      alignItems: 'center',
    justifyContent:"space-between",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
      elevation: 5,
    flex:0.8
  },
  button: {
    borderRadius: 20,
    padding: 10,
      elevation: 2,
  },
  buttonOpen: {
      backgroundColor: '#F194FF',
    
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})



 
               
              
              
           