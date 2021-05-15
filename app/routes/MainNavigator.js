import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import HomeScreen from "./../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name={routes.HOME} component={HomeScreen} />
  </Tab.Navigator>
);

export default MainNavigator;
