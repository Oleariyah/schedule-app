import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const tabs = [
  {
    icon: "home",
    name: "Home",
  },
  {
    icon: "person",
    name: "User",
  },
  {
    icon: "notifications",
    name: "Notification",
  },
  {
    icon: "school",
    name: "Education",
  },
  {
    icon: "person",
    name: "Group",
  },
];

const BottomTabs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => (
        <View key={index}>
          {Platform.OS === "ios" ? (
            <TouchableOpacity
              onPress={() => {
                item.name === "Home"
                  ? navigation.navigate("Home")
                  : navigation.push("Add Reminder");
              }}
            >
              <MaterialIcons name={item.icon} size={25} color="#6a7e88" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                item.name === "Home"
                  ? navigation.navigate("Home")
                  : navigation.push("Add Reminder");
              }}
            >
              <MaterialIcons name={item.icon} size={25} color="#6a7e88" />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 60,
    backgroundColor: "#0e323d",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default BottomTabs;
