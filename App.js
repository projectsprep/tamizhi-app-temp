import React from "react";

import AddressNavigatior from "./app/routes/AddressNavigator";

import AddressEditScreen from "./app/screens/AddressEditScreen";

import AddressScreen from "./app/screens/AddressScreen";

import { StatusBar } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import NoNetwork from "./app/components/utils/NoNetwork";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/routes/AppNavigator";
import WelcomeNavigator from "./app/routes/WelcomeNavigator";
import OrdersContext from "./app/context/OrdersContext";
import useOrders from "./app/hooks/useOrders";

export default function App() {
  const netinfo = useNetInfo();
  const network = netinfo.isInternetReachable;
  const [orders, ordersLoading, setQuantity] = useOrders();

  return (
    <OrdersContext.Provider value={[orders, ordersLoading, setQuantity]}>
      <StatusBar hidden={network} />
      <NoNetwork visible={!network} />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      {/* <AddressNavigatior /> */}
      {/* <AddressScreen /> */}
      {/* <AddressEditScreen /> */}
      {/* <WelcomeNavigator /> */}
    </OrdersContext.Provider>
  );
}

// Tamil
