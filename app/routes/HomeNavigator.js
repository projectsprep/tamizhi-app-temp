import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import HomeScreen from "./../screens/HomeScreen";
import SubCategoryScreen from "./../screens/SubCategoryScreen";
import CategoryScreen from "./../screens/CategoryScreen";
import ProductsSearchScreen from "./../screens/ProductsSearchScreen";
import ProductDetailsScreen from "./../screens/ProductDetailsScreen";
import ProductsListScreen from "./../screens/ProductsListScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.HOME_PAGE} component={HomeScreen} />
    <Stack.Screen name={routes.SUB_CATEGORIES} component={SubCategoryScreen} />
    <Stack.Screen name={routes.CATEGORIES} component={CategoryScreen} />
    <Stack.Screen name={routes.HOME_PRODUCTS} component={ProductsListScreen} />
    <Stack.Screen name={routes.SEARCH} component={ProductsSearchScreen} />
    <Stack.Screen
      name={routes.PRODUCT_DETAILS}
      component={ProductDetailsScreen}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

// Tamil
