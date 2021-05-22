import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import OrdersScreen from "./../screens/OrdersScreen";

const Stack = createStackNavigator();

const OrdersNavigator = (props) => (
  <Stack.Navigator
  // screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={routes.ORDERS} component={OrdersScreen} />
    <Stack.Screen
      name={routes.ORDERS_DETAILS}
      component={ProductDetailsScreen}
    />
  </Stack.Navigator>
);

export default OrdersNavigator;

// Tamil
