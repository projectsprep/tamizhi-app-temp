import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../../AppButton";
import ItemCounter from "../../ItemCounter";

function CartListActions({ quantity, setQuantity }) {
  return (
    <View style={styles.container}>
      {quantity && quantity > 0 ? (
        <ItemCounter quantity={quantity} setQuantity={setQuantity} />
      ) : (
        <AppButton
          color="primaryDark"
          title="Add to Cart"
          onPress={() => setQuantity("add")}
          style={styles.remove}
          textStyle={styles.removeText}
        />
      )}
      <View style={styles.otherActions}>
        {quantity ? (
          <AppButton
            color="primaryDark"
            title="remove"
            onPress={() => setQuantity("remove")}
            style={styles.remove}
            textStyle={styles.removeText}
          />
        ) : null}
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

export default CartListActions;

// Tamil
