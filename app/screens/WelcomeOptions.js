import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import routes from "../routes/routes";
import defaultStyles from "../config/defaultStyles";

function WelcomeOptions({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppButton
          title="Your Delivery Location"
          color="primaryDark"
          style={styles.deliveryBtn}
          onPress={() => navigation.navigate(routes.WELCOME_LOCATION)}
          textStyle={styles.deliveryBtnText}
        />
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.AUTH)}
          style={styles.loginBtn}
          textStyle={styles.loginBtnText}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  deliveryBtn: {
    width: "75%",
    alignSelf: "center",
  },
  deliveryBtnText: {
    color: defaultStyles.colors.primaryDarkText,
  },
  loginBtn: { width: "35%", height: 40, alignSelf: "center" },
  loginBtnText: { color: defaultStyles.colors.primaryText },
});

export default WelcomeOptions;

// Tamil
