import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { FAB } from "react-native-paper";
import SlidingUpPanel from "rn-sliding-up-panel";

const data = [
  {
    id: 1,
    time: "12 AM",
    title: "New Chewables, 10mg",
    description: "1 tablet, per day",
    range: "12:20 - 1:30",
  },
  {
    id: 2,
    time: "1 PM",
    title: "Vet Appointment vaccine",
    description: "1 tablet, per day",
    range: "12:20 - 1:30",
  },
  {
    id: 3,
    time: "4 PM",
    title: "Walk with Tommy",
    description: "1 tablet, per day",
    range: "12:20 - 1:30",
  },
];

const color = ["#a0b2ff", "#fce185", "#f6b8a9"];

const { height } = Dimensions.get("window");

export default ReminderList = (props) => {
  const renderItem = ({ item, index }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <View>
        <Text styel={{ color: "#899a9e" }}>{item.time}</Text>
      </View>
      <Card
        style={{
          width: "85%",
          borderRadius: 15,
          borderLeftWidth: 5,
          borderWidth: 1,
          borderColor: color[index],
          color: "#71858b",
        }}
      >
        <Card.Content>
          <Title style={{ color: "#71858b" }}>{item.title}</Title>
          <Text style={{ color: "#71858b" }}>{item.description}</Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#71858b" }}>{item.range}</Text>
            <MaterialIcons name="notifications" size={20} color="#758993" />
          </View>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#1b3b45" }}
            >
              To Take
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Add Reminder")}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#59ce71" }}
              >
                + Add
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 30,
            }}
          >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "100%",
  },
  content: {
    padding: 20,
  },
});
