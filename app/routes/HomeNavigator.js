import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import HomeScreen from "./../screens/HomeScreen";
import SubCategoryScreen from "./../screens/SubCategoryScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={routes.HOME_PAGE}
      component={HomeScreen}
      options={{ title: "Home" }}
    />
    <Stack.Screen
      name={routes.SUB_CATEGORIES}
      component={SubCategoryScreen}
      options={{ title: "Home" }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

// Tamil
