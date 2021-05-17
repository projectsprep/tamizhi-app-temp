import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import defaultStyles from "../config/defaultStyles";

function AppButton({ title, onPress, color = "primary", style, textStyle }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: defaultStyles.colors[color], ...style },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { ...textStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

// Tamil
