import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";

function AppButton({
  title = null,
  icon = null,
  onPress,
  color = "primary",
  style,
  textStyle,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: defaultStyles.colors[color], ...style },
      ]}
      onPress={onPress}
    >
      {title ? (
        <Text style={[styles.text, { ...textStyle }]}>{title}</Text>
      ) : (
        <MaterialCommunityIcons name={icon} size={30} />
      )}
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
    color: defaultStyles.colors.textColor,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

// Tamil
