import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import ProductsNavigator from "./ProductsNavigator";
import CartNavigator from "./CartNavigator";
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useNotifications from "./../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        activeBackgroundColor: "#F5F5F8",
        style: styles.tab,
      }}
    >
      <Tab.Screen
        name={routes.HOME}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => icon("home", color, size),
        }}
      />
      <Tab.Screen
        name={routes.PRODUCTS}
        component={ProductsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => icon("storefront", color, size),
        }}
      />
      <Tab.Screen
        name={routes.CART}
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color, size }) => icon("cart", color, size),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE_OPTIONS}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => icon("account", color, size),
        }}
      />
    </Tab.Navigator>
  );
};

const icon = (name, color, size) => (
  <MaterialCommunityIcons name={name} color={color} size={size} />
);

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#F5F5F8",
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});

export default AppNavigator;

// Tamil
