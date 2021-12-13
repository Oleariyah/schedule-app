import React, { useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default DatePicker = ({ show, date, setDate, setShow }) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View
      style={{
        width: "80%",
      }}
    >
      {show && (
        <View>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"time"}
            display="default"
            onChange={onChange}
          />
        </View>
      )}
    </View>
  );
};
