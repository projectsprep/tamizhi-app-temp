import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import HomeScreen from "./../screens/HomeScreen";
import SubCategoryScreen from "./../screens/SubCategoryScreen";
import ProductsScreen from "./../screens/ProductsScreen";
import AuthNavigator from "./AuthNavigator";

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
    <Stack.Screen
      name={routes.SUB_CATEGORIES}
      component={SubCategoryScreen}
      options={{ title: "Home" }}
    />
    <Stack.Screen name={routes.HOME_AUTH} component={AuthNavigator} />
  </Stack.Navigator>
);

export default HomeNavigator;

// Tamil
