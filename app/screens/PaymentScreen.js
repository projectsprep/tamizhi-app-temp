import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../routes/routes";
import AppText from "./../components/AppText";

function PaymentScreen({ navigation, route }) {
  const { payment_id, order_id, item } = route.params;

  return (
    <View style={styles.container}>
      <AppText>Order Updates</AppText>
      <AppText>Payment Id: {payment_id}</AppText>
      <AppText>Order Id: {order_id}</AppText>
      <AppButton
        title="Done Payment"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: routes.CART_ORDER_UPDATES,
                params: { item, from: "payment" },
              },
            ],
          })
        }
        // onPress={() => navigation.replace(routes.CART_ORDER_UPDATES, { item, from: "payment" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PaymentScreen;

// Tamil
