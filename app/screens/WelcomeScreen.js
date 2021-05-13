import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import routes from "../routes/routes";
import style from "../config/style";

function WelcomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.WELCOME); // should be replaced with AuthOptions Screen Nav
    }, 1500);
  }, []);

  return (
    <View style={styles.background}>
      <Image
        style={styles.logo}
        source={require("../assets/logo/logo-500.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: style.colors.light,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
  },
});

export default WelcomeScreen;
