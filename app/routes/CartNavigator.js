import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";
import PaymentScreen from "./../screens/PaymentScreen";
import OrderTrackScreen from "../screens/OrderTrackScreen";
import AuthNavigator from "./AuthNavigator";
import OrderDetailsScreen from "./../screens/OrderDetailsScreen";

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
    <Stack.Screen name={routes.PAYMENT} component={PaymentScreen} />
    <Stack.Screen
      name={routes.CART_ORDER_UPDATES}
      component={OrderTrackScreen}
    />
    <Stack.Screen name={routes.Cart_AUTH} component={AuthNavigator} />
    <Stack.Screen
      name={routes.CART_ORDER_DETAILS}
      component={OrderDetailsScreen}
    />
  </Stack.Navigator>
);

export default CartNavigator;

// Tamil
