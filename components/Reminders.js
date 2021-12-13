import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  set,
} from "react-native-reanimated";

const data = [
  {
    month: "Mon",
    day: 12,
    rating: 3,
  },
  {
    month: "Tue",
    day: 13,
    rating: 2,
  },
  {
    month: "Wed",
    day: 14,
    rating: 1,
  },
  {
    month: "Thu",
    day: 15,
    rating: 3,
  },
  {
    month: "Fri",
    day: 16,
    rating: 3,
  },
  {
    month: "Sat",
    day: 17,
    rating: 3,
  },
  {
    month: "Sun",
    day: 18,
    rating: 3,
  },
];

const colors = ["#a0b2ff", "#fce185", "#f6b8a9"];

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const RenderCard = ({ item, index, selected, set }, props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.card,
          { backgroundColor: selected === index ? "#f6b8a9" : "transparent" },
        ]}
        key={index}
        onPress={() => {
          set(index);
        }}
      >
        <View style={{ marginBottom: 5 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: selected === index ? "#475456" : "#46666f",
            }}
          >
            {item.month}
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            color: selected === index ? "#595d5e" : "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {item.day}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {colors.map((value, index) => {
          for (let i = 0; i < item.rating; i++) {
            return (
              <View
                style={{
                  backgroundColor: value,
                  height: 3,
                  width: 3,
                  marginHorizontal: 3,
                }}
                key={index}
              />
            );
          }
        })}
      </View>
    </View>
  );
};

const Reminders = () => {
  const x = useSharedValue(0);

  const [selected, set] = useState();
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <AnimatedFlatlist
        horizontal
        data={data}
        renderItem={(props) => (
          <RenderCard {...props} selected={selected} set={set} />
        )}
        ListHeaderComponent={<View style={{ width: 15 }} />}
        keyExtractor={({ item }) => item}
        scrollEventThrottle={6}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 2,
    width: 70,
    height: 90,
    overflow: "hidden",
    borderRadius: 20,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 3,
    borderColor: "#1b3c45",
    justifyContent: "center",
  },
});

export default Reminders;
