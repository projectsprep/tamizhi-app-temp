import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import AddressNavigator from "./AddressNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import HelpScreen from "../screens/HelpScreen";
import AccoutnScreen from "../screens/AccoutnScreen";
import FeedbackScreen from "../screens/FeedbackScreen";

const Stack = createStackNavigator();

const ProfileNavigator = (props) => (
  <Stack.Navigator
  // screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={routes.PROFILE_OPTIONS} component={ProfileScreen} />
    <Stack.Screen name={routes.ACCOUNT} component={AccoutnScreen} />
    <Stack.Screen name={routes.ADDRESSES} component={AddressNavigator} />
    <Stack.Screen name={routes.HELP} component={HelpScreen} />
    <Stack.Screen name={routes.FEEDBACK} component={FeedbackScreen} />
  </Stack.Navigator>
);

export default ProfileNavigator;

// Tamil
