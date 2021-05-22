import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import ProductsNavigator from "./ProductsNavigator";
import CartNavigator from "./CartNavigator";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name={routes.HOME} component={HomeNavigator} />
    <Tab.Screen name={routes.PRODUCTS} component={ProductsNavigator} />
    <Tab.Screen name={routes.CART} component={CartNavigator} />
    <Tab.Screen name={routes.PROFILE} component={ProfileNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;

// Tamil