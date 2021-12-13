import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker from "./DatePicker";
import moment from "moment";

const options = [
  {
    icon: "home",
    name: "Vaccine",
    color: "#fce185",
  },
  {
    icon: "person",
    name: "Medicine",
    color: "#f6b8a9",
  },
  {
    icon: "notifications",
    name: "Liquid",
    color: "#a0b2ff",
  },
];

export default AddReminder = () => {
  const [value, setValue] = useState({});
  const [count, setCount] = useState(0);
  const [selected, set] = useState();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState("");

  return (
    <View style={styles.container} onPress={() => setEdit("")}>
      <DatePicker date={date} onDateChange={setDate} />
      <View style={styles.content}>
        <ScrollView onPress={() => setEdit("")}>
          <Text style={styles.title}>MEDICINE TYPE</Text>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {options.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={[
                    styles.option,
                    {
                      borderColor: index === selected ? item.color : "#cccccc",
                      borderWidth: index === selected ? 2 : 1,
                    },
                  ]}
                  onPress={() => set(index)}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={25}
                    color={item.color}
                  />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={styles.title}>REMINDER NAME</Text>
            <TextInput
              label={value?.name ? "" : "Give your reminder a name"}
              value={value?.name}
              dense={false}
              style={styles.textInput}
              mode="flat"
              onChangeText={(text) => setValue({ ...value, name: text })}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>DURATION</Text>
            <TextInput
              label={value?.duration ? "" : "0 Days"}
              value={value?.duration}
              dense={false}
              style={styles.textInput}
              disabled={edit !== "duration"}
              keyboardType="numeric"
              mode="flat"
              onChangeText={(text) => setValue({ ...value, duration: text })}
              right={
                <TextInput.Icon
                  name={edit === "duration" ? "pen" : "plus"}
                  onPress={() => setEdit(edit === "duration" ? "" : "duration")}
                />
              }
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>TIME</Text>
            <TextInput
              value={moment(date).format("hh:mm A")}
              dense={false}
              style={styles.textInput}
              mode="flat"
              disabled={edit !== "time"}
              onChangeText={(text) => setValue({ ...value, time: text })}
              right={
                <TextInput.Icon
                  name={edit === "time" ? "pen" : "clock"}
                  onPress={() => {
                    setEdit(edit === "time" ? "" : "time");
                    setShow(!show);
                  }}
                />
              }
            />
          </View>
          <View>
            <View
              style={{
                marginVertical: 30,
              }}
            >
              <Text style={styles.title}>AMOUNT</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => setCount(count - 1)}
                  disabled={count === 0}
                  style={styles.button}
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: "space-around", width: 100 }}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#193a44",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    {count} Pills
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setCount(count + 1)}
                  style={styles.button}
                >
                  <View>
                    <Text style={{ color: "#24464f" }}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginBottom: 20 }}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#f6b8a9",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 18 }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <DatePicker {...{ show, date, setDate, setShow }} />
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
  title: {
    color: "#758a90",
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 14,
  },
  option: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 15,
  },
  button: {
    borderRadius: 50,
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "transparent",
    height: 60,
  },
});
