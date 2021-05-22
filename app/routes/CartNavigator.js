import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";

const Stack = createStackNavigator();

const CartNavigator = (props) => (
  <Stack.Navigator
  // screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={routes.CART} component={CartScreen} />
    <Stack.Screen
      name={routes.CART_PRODUCT_DETAILS}
      component={ProductDetailsScreen}
    />
    <Stack.Screen name={routes.CHECK_OUT} component={CheckOutScreen} />
  </Stack.Navigator>
);

export default CartNavigator;

// Tamil
