import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { OrderUpdateItem } from "../components/listing";
import routes from "../routes/routes";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function OrderTrackScreen({ route, navigation }) {
  const { from, item } = route.params;
  const redirectPage =
    from && from === "payment"
      ? routes.CART_ORDER_DETAILS
      : routes.ORDER_DETAILS;
  const updates = [
    {
      id: 2,
      icon: "state-machine",
      message: "Status: alive",
    },
    {
      id: 3,
      icon: "shopping",
      message: "Order accepted",
    },
    {
      id: 4,
      icon: "truck-trailer",
      message: "Order processing... / Food is being prepared",
    },
    {
      id: 5,
      icon: "truck-trailer",
      message: "Delivery Boy assigned",
    },
    {
      id: 6,
      icon: "truck-delivery-outline",
      message: "Order Processed... / Your food is ready",
    },
    {
      id: 7,
      icon: "truck-delivery",
      message:
        "Order Shipped... / Waiting for the delivery partner to collect the food",
    },
    {
      id: 8,
      icon: "truck-delivery",
      message: "Delivery partner picked your order / food",
    },
    {
      id: 9,
      icon: "truck-fast",
      message: "Delivery partner is on way to the delivery destination",
    },
    {
      id: 10,
      icon: "home",
      message: "Delivery at your door step",
    },
    {
      id: 11,
      icon: "truck-check-outline",
      message: "Your Order Delivered",
    },
  ];
  return (
    <Screen style={styles.container}>
      <ScrollView contentContainerStyle={styles.view}>
        <AppText>Order Updates</AppText>
        {updates.map((update) => (
          <OrderUpdateItem key={update.id} icon={update.icon}>
            {update.message}
          </OrderUpdateItem>
        ))}
        <AppButton
          title=" Order Details"
          onPress={() => navigation.navigate(redirectPage, { item })}
        />
        <AppButton
          title="Back to cart"
          onPress={() => navigation.navigate(routes.CART, { item })}
        />
        <AppButton
          title="help"
          onPress={() =>
            Notifier.toastLong("We are not here to help you f****r !")
          }
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},

  view: { padding: 20 },
});

export default OrderTrackScreen;
