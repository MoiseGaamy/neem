import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OverView from "./TabScreens/OverView.js";
import Plan from "./TabScreens/Plan.js";
import Progress from "./TabScreens/Progress.js";
import Investment from "./TabScreens/Investment.js";
import {
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={OverView}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="plan"
        component={Plan}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-paper-plane-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="investment"
        component={Investment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlce" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
