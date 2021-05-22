import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import ProductsScreen from "./../screens/ProductsScreen";
import ProductDetailsScreen from "./../screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const ProductsNavigator = (props) => (
  <Stack.Navigator
  // screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={routes.SEARCH} component={ProductsScreen} />
    <Stack.Screen
      name={routes.PRODUCT_DETAILS}
      component={ProductDetailsScreen}
    />
  </Stack.Navigator>
);

export default ProductsNavigator;

// Tamil
