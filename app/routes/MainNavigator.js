import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import HomeScreen from "./../screens/HomeScreen";
import OrdersScreen from "./../screens/OrdersScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name={routes.HOME} component={HomeScreen} />
    <Tab.Screen name={routes.ORDERS} component={OrdersScreen} />
  </Tab.Navigator>
);

export default MainNavigator;

// Tamil
