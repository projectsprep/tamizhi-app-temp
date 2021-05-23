import React from "react";
import { StyleSheet, View } from "react-native";
import defaultStyles from "../../../config/defaultStyles";
import AppButton from "../../AppButton";

function CartHeader({ onPress, visible }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <AppButton
        title="Check Out"
        onPress={onPress}
        color="primaryDark"
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "60%",
    alignSelf: "center",
  },

  container: {
    flex: 1,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.listItem,
  },
});

export default CartHeader;

// Tamil
