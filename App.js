import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import Quiz from "./src/screens/Quiz";
import About from "./src/screens/About";
import Learn from "./src/screens/Learn";
import Search from "./src/screens/Search";
import Docs from "./src/screens/Docs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds } from 'react-native-google-mobile-ads';



const Tab = createMaterialBottomTabNavigator();

export default function App() {
  


  return (
  
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        labeled={true}
        shifting={true}
        activeColor="#fff"
        barStyle={{ backgroundColor: "#900", borderTopEndRadius: 1 }}
      >
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search Users",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Learn"
          component={Docs}
          options={{
            tabBarLabel: "Learn Git",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="git" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Quiz"
          component={Quiz}
          options={{
            tabBarLabel: "Take Quiz",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="brain" color={color} size={25} />
            ),
          }}
        />
      <Tab.Screen
          name="Info"
          component={About}
          options={{
            tabBarLabel: "Info",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information-outline" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "none",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
