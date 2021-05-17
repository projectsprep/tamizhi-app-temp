import React from "react";
import { StatusBar } from "react-native";

import OrdersScreen from "./app/screens/OrdersScreen";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <OrdersScreen />
    </>
  );
}

// import { NavigationContainer } from "@react-navigation/native";
// import WelcomeNavigator from "./app/routes/WelcomeNavigator";

{
  /* <NavigationContainer>
  <WelcomeNavigator />
</NavigationContainer> */
}

// Tamil
