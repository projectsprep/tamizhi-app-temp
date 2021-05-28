import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import OrderDetailsScreen from "./../screens/OrderDetailsScreen";
import OrderTrackScreen from "../screens/OrderTrackScreen";
import PaymentScreen from "./../screens/PaymentScreen";
import BookNowScreen from "../screens/BookNowScreen";

const Stack = createStackNavigator();

const CartNavigator = ({ navigation, route }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={routes.BOOK_NOW}
      component={BookNowScreen}
      initialParams={{ product: route.params.product }}
    />
    <Stack.Screen name={routes.PAYMENT} component={PaymentScreen} />
    <Stack.Screen
      name={routes.CART_ORDER_DETAILS}
      component={OrderDetailsScreen}
    />
    <Stack.Screen
      name={routes.CART_ORDER_UPDATES}
      component={OrderTrackScreen}
    />
    <Stack.Screen
      name={routes.CART_PRODUCT_DETAILS}
      component={ProductDetailsScreen}
      initialParams={{ isDetailOnly: true }}
    />
  </Stack.Navigator>
);

export default CartNavigator;

// Tamil
