import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./../../AppText";

function CartListActions({ quantity }) {
  return (
    <View style={styles.container}>
      <AppText>Quantity: {quantity + ""}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
});

export default CartListActions;

// Tamil
