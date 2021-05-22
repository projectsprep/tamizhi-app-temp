import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import AddressScreen from "../screens/AddressScreen";
import AddressEditScreen from "../screens/AddressEditScreen";

const Stack = createStackNavigator();

const AddressNavigator = (props) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LIST_ADDRESSES} component={AddressScreen} />
    <Stack.Screen name={routes.EDIT_ADDRESSES} component={AddressEditScreen} />
  </Stack.Navigator>
);

export default AddressNavigator;

// Tamil
