import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";

function OrderListActions({ quantity, setQuantity }) {
  return (
    <View style={styles.container}>
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
      <View style={styles.otherActions}>
        <AppButton
          color="primaryDark"
          title="remove"
          onPress={() => setQuantity("remove")}
          style={styles.remove}
          textStyle={styles.removeText}
        />
        <AppButton
          color="primaryDark"
          title="Save for Later"
          onPress={() => setQuantity("save")}
          style={styles.save}
          textStyle={styles.saveText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

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

  otherActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  save: {
    marginStart: 10,
    padding: 0,
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  saveText: {
    margin: 0,
    fontSize: 8,
  },

  remove: {
    padding: 0,
    width: 70,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  removeText: {
    fontSize: 8,
  },

  quantity: {
    color: "#007eb9",
  },
});

export default OrderListActions;

// Tamil
