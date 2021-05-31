import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./../../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../../config/defaultStyles";

function OrderUpdateItem({ children, icon }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={20} />
      <View style={styles.textContent}>
        <AppText style={styles.message}>{children}</AppText>
        <AppText>time: 11.45pm 23 dec 2020</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: defaultStyles.colors.listItem,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  textContent: {
    marginLeft: 20,
    width: "80%",
  },

  message: {
    marginBottom: 15,
  },
});

export default OrderUpdateItem;

// Tamil
