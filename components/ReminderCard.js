import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ReminderCard = ({ item, index }) => {
  const uri = "https://loremflickr.com/120/240?lock=" + index;
  return (
    <View style={styles.card}>
      <Image source={{ uri }} style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 150,
    overflow: "hidden",
    borderRadius: 12,
    marginLeft: 4,
    marginRight: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
});

export default ReminderCard;
