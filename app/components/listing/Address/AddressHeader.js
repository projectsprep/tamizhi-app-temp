import React from "react";
import { StyleSheet, View } from "react-native";
import defaultStyles from "../../../config/defaultStyles";
import AppButton from "../../AppButton";

function AddressHeader({ onPress }) {
  return (
    <View style={styles.container}>
      <AppButton
        onPress={onPress}
        title="+ Add Address"
        style={styles.addItem}
        textStyle={styles.addText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: defaultStyles.colors.white },

  addItem: {
    alignSelf: "center",
    width: "50%",
    backgroundColor: defaultStyles.colors.listItem,
  },

  addText: {
    color: "black",
  },
});

export default AddressHeader;
