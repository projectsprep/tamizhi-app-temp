import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Screen from "./../components/Screen";
import LoadingScreen from "./utils/LoadingScreen";
import { Listing, OrderItem } from "./../components/listing";
import useCart from "./../hooks/useCart";
import _ from "lodash";
import AppText from "./../components/AppText";
import routes from "../routes/routes";

let count = 1;

function OrdersScreen({ navigation }) {
  const [cart, loading, setUpdated] = useCart();

  // Status
  // 0 => cancelled
  // 1 => alive
  // 2 => delivered
  // 3 => hold

  const orders = cart.map((prod) => {
    const status = count % 2 === 0 ? "alive" : "cancelled";
    return {
      id: count++,
      products: cart,
      createdAt: Date.now() - count * 500,
      status,
      totalPrice: Math.round(Math.random() * count * 500),
    };
  });

  const showDetails = (item) => {
    const detailsPage =
      item.status === "alive" || item.status === "hold"
        ? routes.ORDER_UPDATES
        : routes.ORDER_DETAILS;
    navigation.navigate(detailsPage, { item });
  };

  const orderItem = (item) => (
    <OrderItem order={item} onPress={() => showDetails(item)} />
  );

  return (
    <>
      <LoadingScreen visible={loading} />
      <Screen style={styles.container}>
        <Listing
          keyProp="id"
          items={_.orderBy(orders, "createdAt", "desc")}
          stickyHeaderIndices={[0]}
          customListItem={orderItem}
          onSelect={(item) =>
            navigation.navigate(routes.ORDER_PRODUCT_DETAILS, {
              product: item,
            })
          }
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    marginVertical: 25,
  },
});

export default OrdersScreen;
