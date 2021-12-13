import * as React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Header({ navigation, route }) {
  return (
    <View style={styles.container}>
      {navigation && (
        <TouchableOpacity
          style={{ position: "absolute", left: 0 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={20} color="#cdc88c" />
        </TouchableOpacity>
      )}
      <Text style={styles.contentStyle}>
        {navigation ? "Add Reminder" : "Logo"}
      </Text>
      {navigation && (
        <TouchableOpacity style={{ position: "absolute", right: 30 }}>
          <Text style={{ color: "#23b960" }}> Save </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  contentStyle: {
    color: "#f6b9a9",
    fontSize: 18,
  },
});
