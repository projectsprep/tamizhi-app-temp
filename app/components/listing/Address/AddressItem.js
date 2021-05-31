import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../../AppText";
import defaultStyles from "../../../config/defaultStyles";

function AddressItem({ address, onPress }) {
  if (!address) return null;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText>{address.label} : </AppText>
      <AppText>{address.doorNo},</AppText>
      <AppText>{address.addressLine1},</AppText>
      <AppText>{address.addressLine2},</AppText>
      <AppText>{`${address.pincode}`},</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "90%",
    alignSelf: "center",
    backgroundColor: defaultStyles.colors.listItem,
  },
});

export default AddressItem;

// Tamil
