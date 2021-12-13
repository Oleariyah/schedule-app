import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddReminderScreen from "./screens/AddReminderScreen.";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "./components/Header";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import BottomTabs from "./components/BottomTabs";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0e323d",
    accent: "#f6b9a9",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#0e323d",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: () => <Header />,
              }}
            />
            <Stack.Screen
              name="Add Reminder"
              component={AddReminderScreen}
              options={(props) => ({
                headerBackVisible: false,
                headerTitle: () => <Header {...props} />,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRight: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
  },
});
