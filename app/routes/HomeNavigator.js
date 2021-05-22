import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import HomeScreen from "./../screens/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => (
  <Stack.Navigator
  // screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={routes.CATEGORIES}
      component={HomeScreen}
      options={{ title: "Home" }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

// Tamil
