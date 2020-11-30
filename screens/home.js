import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { render } from "react-dom";
import { Alert, Button, StyleSheet, Text, View, Switch } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function Home() {
  const [unit, setUnit] = useState("Meter");
  const [roomSize, setRoomSize] = useState(0);
  const [materialPrice, setMaterialPrice] = useState(0);
  const [laborCost, setLaborCost] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setUnit(isEnabled ? "Meter" : "Feet");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Please Enter Following details </Text>
        <Text></Text>
        <Text></Text>
        <Text>Select Unit You want to move forward with :</Text>
        <Text>
          Meter
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#93b0ff" : "#f4f3f4"}
            title="hi"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />{" "}
          Feet
        </Text>
        <Text></Text>

        <Text>Room Size :</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.ipnut}
          onChangeText={(txt) => setRoomSize(txt)}
        />
        <Text>Flooring Price Per Unit :</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.ipnut}
          onChangeText={(txt) => setMaterialPrice(txt)}
        />
        <Text>Installation Charge per unit :</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.ipnut}
          onChangeText={(txt) => setLaborCost(txt)}
        />
        <Button
          title="Calculate"
          onPress={() => calculate(roomSize, materialPrice, laborCost, unit)}
        />
      </View>
    </ScrollView>
  );
}

const calculate = (size, mPrice, inPrice, unit) => {
  let insPrice = inPrice * size;
  let floorPr = mPrice * size;
  let sub = insPrice + floorPr;
  let str = "";
  let count = 0;
  if (size == 0) {
    str += "\nRoom Size has not been declared";
    count++;
  } else if (mPrice == 0) {
    str += "\nFlooring Price has not been declared!!";
    count++;
  } else if (inPrice == 0) {
    str += "Installation Price has not been declared";
    count++;
  }

  if (count == 0) {
    let msg = `Selected Unit : ${unit}\nInstallation Price : $${insPrice}\nFlooring Price : $${floorPr}\nSubtotal : $${sub}\nTax : $${
      sub * 0.13
    }\ntotal : $${(sub * 1.13).toFixed(2)}`;
    alert(msg);
  } else {
    alert(str);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  ipnut: {
    width: "40%",
    padding: 7,
    margin: 10,
    borderBottomColor: "lightblue",
    borderBottomWidth: 2,
  },
  forSwitch: {
    alignItems: "center",
  },
});
