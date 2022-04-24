import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React,{ useEffect}from "react";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Goal from "../Goal.js";
import { connect } from "react-redux";
import { getAllGoals } from "../../redux/actions/userActions.js";
import { DrawerActions } from "@react-navigation/native";
import { PayWithFlutterwave } from "flutterwave-react-native";

const Progress = ({ goals, navigation , getAllGoals}) => {
  console.log(goals);
  // const [amount] = goals;
  // console.log(amount)
  // const { amountForContribution } = amount;

  useEffect(() =>
  {
       getAllGoals()
     },[])

  const data = [
    {
      id: 1,
      icon: <Ionicons name="home-outline" size={24} color="black" />,
      itemName: "newHome",
      monthLeft: "9 months left",
      startPrice: 15700,
      endPrice: 37500,
    },
    {
      id: 2,
      icon: <FontAwesome5 name="plane-departure" size={24} color="black" />,
      itemName: "trip to dubai",
      monthLeft: "5 months left",
      startPrice: 8500,
      endPrice: 10000,
    },
    {
      id: 3,
      icon: (
        <MaterialCommunityIcons name="cash-refund" size={24} color="black" />
      ),
      itemName: "Debt",
      monthLeft: "7 months left",
      startPrice: 40000,
      endPrice: 80000,
    },
  ];

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
    amount: 50,
    currency: "GHS",
    payment_options: "mobilemoneyghana",
  };
  const handleOnRedirect = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.headContainer}>
            <View
            style={{
              backgroundColor: "#FFBD01",
              width: 100,
              height: 30,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PayWithFlutterwave
                onRedirect={(data) => handleOnRedirect(data)}
                options={options}
                customButton={(props) => (
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
                <Text style={{ fontFamily: "inconsolata", fontSize: 17 }}>Payment</Text>
              </TouchableOpacity>
            )}
          />
          </View>
            <View
            style={{
              backgroundColor: "#14A5A1",
              width: 120,
              height: 30,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <TouchableOpacity onPress={() => navigation.navigate("achieved")}>
            <Text style={{color:"#000"}}>Goal Achieved</Text>
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.thirdContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Goal item={item} />}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goals,
  };
}

const mapDispatchToProps = {
  getAllGoals
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#069A8E",
  },
  firstContainer: {
    flex: 0.2,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  secondContainer: {
    flex: 0.1,
    // backgroundColor: "pink",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  thirdContainer: {
    flex: 0.7,
    // backgroundColor:"grey"
  },
  headContainer: {
    flex: 0.8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
