import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

function AddReminderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Add Reminder")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e323d",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddReminderScreen;
