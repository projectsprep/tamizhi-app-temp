import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeNavigator from "./app/routes/WelcomeNavigator";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <WelcomeNavigator />
      </NavigationContainer>
    </>
  );
}
