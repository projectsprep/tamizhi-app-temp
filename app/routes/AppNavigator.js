import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProductsNavigator from "./ProductsNavigator";
import OrdersNavigator from "./OrdersNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name={routes.PRODUCTS} component={ProductsNavigator} />
    <Tab.Screen name={routes.HOME} component={HomeScreen} />
    <Tab.Screen name={routes.ORDERS} component={OrdersNavigator} />
    <Tab.Screen name={routes.PROFILE} component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;

// Tamil
