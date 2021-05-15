import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import style from "../config/defaultStyles";

function DisplayLogo() {
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
  },
});

export default DisplayLogo;
