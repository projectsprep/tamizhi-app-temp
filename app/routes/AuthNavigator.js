import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import AuthScreen from "../screens/AuthScreen";
import PhoneVerification from "./../screens/PhoneVerification";

const Stack = createStackNavigator();

const AuthNavigator = (props) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LOGIN} component={AuthScreen} />
    <Stack.Screen
      name={routes.OTP_VERIFICATION}
      component={PhoneVerification}
      initialParams={{ redirect: routes.MAIN }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

// Tamil
