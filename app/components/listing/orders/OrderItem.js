import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../../AppText";
import defaultStyles from "../../../config/defaultStyles";

function OrderItem({ order, onPress }) {
  if (!order) return null;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText>Tracking Id: {order.trackingId + ""},</AppText>
      <AppText>Status: {order.status + ""},</AppText>
      <AppText>Number of products: {order.noOfItems + ""},</AppText>
      <AppText>Total Price: {order.totalPrice + ""},</AppText>
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

export default OrderItem;
