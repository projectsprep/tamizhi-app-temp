import React from "react";
import { StatusBar } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import NoNetwork from "./app/components/utils/NoNetwork";
import AppNavigator from "./app/routes/AppNavigator";
import CartContext from "./app/context/CartContext";
import useCart from "./app/hooks/useCart";

export default function App() {
  const netinfo = useNetInfo();
  const network = netinfo.isInternetReachable;
  const [cart, cartLoading, setQuantity] = useCart();

  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <CartContext.Provider value={[cart, cartLoading, setQuantity]}>
        {/* Infos */}
        <StatusBar hidden={network} />
        <NoNetwork visible={!network} />
        {/* Navigator */}
        <NavigationContainer
          theme={scheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <AppNavigator />
        </NavigationContainer>
      </CartContext.Provider>
    </AppearanceProvider>
  );
}

// Tamil
