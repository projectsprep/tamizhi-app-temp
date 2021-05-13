import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import routes from "../routes/routes";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  const logged = true;
  return (
    <Screen style={styles.background}>
      <View
        style={{
          ...styles.logoContainer,
          justifyContent: logged ? "space-around" : "center",
          top: logged ? 100 : "35%",
        }}
      >
        <Image
          style={styles.logo}
          source={require("../assets/logo/logo-500-r.png")}
        />
        <Text style={styles.tagline}>Welcome to our market !</Text>
      </View>

      {logged && (
        <View style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            color="primaryDark"
            // onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <AppButton
            title="Register"
            color="secondary"
            // onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    bottom: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.black,
  },
});

export default WelcomeScreen;
