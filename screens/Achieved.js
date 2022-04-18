import { StyleSheet, Text, View,FlatList, TouchableOpacity,Alert, Modal,Pressable } from 'react-native'
import React, { useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import GoalAchieved from './GoalAchieved.js';
import ProceedPayment from './payement/ProceedPayment.js';

const Achieved = ({navigation}) =>
{
    const [modalVisible, setModalVisible] = useState(false);
    const Data = [
        {
            id: 1,
            icon: <MaterialIcons name="done" size={50} color="#00C897" />,
            name: "Trip to Dubai",
            text:"Goal Completed"
            
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
                <FlatList data={Data} keyExtractor={(item) => item.id} renderItem={({ item }) => (<TouchableOpacity onPress={() => setModalVisible(true)}><GoalAchieved item={item} /></TouchableOpacity>)}/>
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