import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import AddReminder from "../components/AddReminder";

function AddReminderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <View style={{ paddingHorizontal: 20, paddingTop: 80 }}>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.title}>Add daily reminder</Text>
          </View>
          <Text style={styles.subtitle}>And set your schedule.</Text>
        </View>
      </View>
      <View style={{ flex: 2, width: "100%", height: "100%" }}>
        <AddReminder navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "#0e323d",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#46666f",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});

export default AddReminderScreen;
