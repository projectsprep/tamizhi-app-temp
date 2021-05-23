import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import WelcomeScreen from "../screens/WelcomeScreen";
import WelcomeOptions from "../screens/WelcomeOptions";
import EditLocation from "../screens/EditLocationScreen";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createStackNavigator();

const WelcomeNavigator = (props) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={routes.WELCOME_OPTIONS} component={WelcomeOptions} />
    <Stack.Screen
      name={routes.WELCOME_LOCATION}
      component={EditLocation}
      options={{ title: "Choose Delivery Location", headerShown: true }}
    />
    <Stack.Screen name={routes.AUTH} component={AuthNavigator} />
    <Stack.Screen name={routes.MAIN} component={AppNavigator} />
  </Stack.Navigator>
);

export default WelcomeNavigator;

// Tamil
