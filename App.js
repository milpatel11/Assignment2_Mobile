import { StatusBar } from "expo-status-bar";
import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { CreateStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/home";

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
