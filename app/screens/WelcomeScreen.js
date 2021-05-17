import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import routes from "../routes/routes";
import icons from "../config/icons";

function WelcomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(routes.WELCOME_OPTIONS);
    }, 2000);
  }, []);

  return (
    <View style={styles.background}>
      <Image style={styles.logo} source={icons.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default WelcomeScreen;

// Tamil
