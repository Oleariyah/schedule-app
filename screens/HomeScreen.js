import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { Portal } from "react-native-paper";
import moment from "moment";
import Reminders from "../components/Reminders";
import ReminderList from "../components/ReminderList";
import BottomTabs from "../components/BottomTabs";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <View style={styles.date}>
          <Text style={{ fontSize: 18, color: "white" }}>Today</Text>
          <Text style={{ fontSize: 14, color: "#46666f" }}>
            {moment().format("MMMM DD, YYYY")}
          </Text>
        </View>
        <Reminders />
      </View>
      <View style={{ flex: 2, width: "100%", height: "100%" }}>
        <ReminderList navigation={navigation} />
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Add Reminder")}
      /> */}
      <BottomTabs navigation={navigation} />
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
  date: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    height: 80,
  },
});

export default HomeScreen;
