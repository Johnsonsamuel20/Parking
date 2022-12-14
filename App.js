import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import DashboardScreen from "./src/screens/DashboardScreen";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigator/RootNavigator";
import SelectScreen from "./src/screens/SelectScreen";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
