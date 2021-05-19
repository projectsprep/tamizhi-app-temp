import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";

function ItemCounter({ quantity, setQuantity }) {
  return (
    <View style={styles.counter}>
      <AppButton
        color="primaryDark"
        title="-"
        onPress={() => setQuantity(quantity > 1 ? "dec" : "remove")}
        style={styles.button}
        textStyle={styles.butonText}
      />
      <AppText style={styles.quantity}>{quantity}</AppText>
      <AppButton
        color="primaryDark"
        title="+"
        onPress={() => setQuantity("inc")}
        style={styles.button}
        textStyle={styles.butonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "#e3e3e3",
    width: 130,
  },

  button: {
    width: 45,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  butonText: {
    fontSize: 18,
  },
});

export default ItemCounter;

// Tamil
