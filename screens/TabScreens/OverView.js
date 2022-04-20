import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Goal from "../Goal.js";
import { connect } from "react-redux";
import { DrawerActions } from "@react-navigation/native";

const Progress = ({ goals, navigation }) => {
  console.log(goals);

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
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.headContainer}>
          <View>
            <Text style={{ fontFamily: "inconsolata", fontSize: 16 }}>
              $Gaamy
            </Text>
            <Text style={{ fontFamily: "inconsolata", fontSize: 16 }}>
              Personal Account
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFBD01",
              width: 100,
              height: 30,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Proceed")}>
              <Text style={{ fontFamily: "inconsolata", fontSize: 17 }}>
                Payment
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={{ flex: 0.3 }}>Your goals</Text>
        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text>All</Text>
          <TouchableOpacity onPress={() => navigation.navigate("achieved")}>
            <Text>Achieved</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <FlatList
          data={data}
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
};

export default connect(mapStateToProps)(Progress);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cfeef7",
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
