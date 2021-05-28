import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider } from "react-native-appearance";

import NoNetwork from "./app/components/utils/NoNetwork";
import CartContext from "./app/context/CartContext";
import useCart from "./app/hooks/useCart";
import AuthContext from "./app/auth/context";
import AuthNavigator from "./app/routes/AuthNavigator";
import AppNavigator from "./app/routes/AppNavigator";
import authStorage from "./app/auth/storage";
import { StatusBar } from "react-native";

function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const cartArray = useCart(user?.user_id);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  const theme = DefaultTheme;

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log("error restoring token", error)}
      />
    );

  return (
    <AppearanceProvider>
      <AuthContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={cartArray}>
          <StatusBar hidden={true} />
          <NoNetwork />
          <NavigationContainer theme={theme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </CartContext.Provider>
      </AuthContext.Provider>
    </AppearanceProvider>
  );
}

export default App;

// Tamil
