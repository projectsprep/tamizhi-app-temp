import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import ProductsScreen from "./../screens/ProductsScreen";
import ProductDetailsScreen from "./../screens/ProductDetailsScreen";
import BookNowNavigator from "./BookNowNavigator";

const Stack = createStackNavigator();

const ProductsNavigator = ({ route }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={routes.SEARCH}
      component={ProductsScreen}
      initialParams={{ query: route.params?.query ?? "" }}
    />
    <Stack.Screen
      name={routes.PRODUCT_DETAILS}
      component={ProductDetailsScreen}
    />
    <Stack.Screen name={routes.BOOK} component={BookNowNavigator} />
  </Stack.Navigator>
);

export default ProductsNavigator;

// Tamil
