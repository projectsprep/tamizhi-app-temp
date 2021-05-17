import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import _ from "lodash";

import images from "../config/images";
import InfoScreen from "./utils/InfoScreen";
import ordersApi from "../api/ordersApi";
import Screen from "./../components/Screen";
import LoadingScreen from "./utils/LoadingScreen";
import Notifier from "../utility/Notifier";
import wishListApi from "../api/wishListApi";
import { OrderListings } from "../components/Listings";

function OrdersScreen({ navigation }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState([]);

  const setQuantity = (product_id, action) => {
    const order = orders.find((order) => order.product_id === product_id);
    const newOrders = orders.filter((order) => order.product_id !== product_id);
    const oldQuantity = order.quantity;
    console.log(action);

    async function increment() {
      const incRes = await ordersApi.increaseCount({
        user_id: 1,
        product_id,
      });
      if (!incRes.ok) {
        order.quantity = oldQuantity;
        Notifier.toastLong(resRes.data.message);
        setOrders([...newOrders, order]);
      }
    }

    async function decrement() {
      const resDec = await ordersApi.decreaseCount({
        user_id: 1,
        product_id,
      });
      if (!resDec.ok) {
        order.quantity = oldQuantity;
        Notifier.toastLong(resDec.data.message);
        setOrders([...newOrders, order]);
      }
    }

    async function remove() {
      const resRm = await ordersApi.remove({
        user_id: 1,
        product_id,
      });
      if (!resRm.ok) {
        order.quantity = oldQuantity;
        Notifier.toastLong(resRm.data.message);
        setOrders([...newOrders, order]);
      }
    }

    async function saveForLater() {
      const resRmd = await ordersApi.remove({
        user_id: 1,
        product_id,
      });
      const resSav = await wishListApi.save({
        user_id: 1,
        product_id,
      });
      if (!resRmd.ok) {
        order.quantity = oldQuantity;
        Notifier.toastLong(resRmd.data.message);
        setOrders([...newOrders, order]);
      }
      if (!resSav.ok) {
        Notifier.toastLong("Error Adding product to Wishlist");
      }
    }

    switch (action) {
      case "inc":
        if (order.quantity >= order.product.stock)
          return Notifier.toastLong("Out of stock");

        order.quantity = order.quantity + 1;
        setOrders([...newOrders, order]);

        return increment();

      case "dec":
        order.quantity = order.quantity - 1;
        setOrders([...newOrders, order]);

        return decrement();

      case "remove":
        setOrders(newOrders);
        return remove();

      case "save":
        setOrders(newOrders);
        return saveForLater();

      default:
        break;
    }
  };

  const getOrders = async () => {
    setLoading(true);
    const response = await ordersApi.getOrders({ user_id: 1 });
    if (!response.ok) return setLoading(false);
    setOrders(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getOrders();
  }, []);

  if (orders.length <= 0)
    return (
      <>
        <LoadingScreen visible={loading} />
        <InfoScreen
          title="No orders yet"
          buttonTitle="Let's Shop"
          description="You don't have any orders here"
          action={() => getOrders()}
          image={images.noOrders}
          loading={loading}
        />
      </>
    );

  return (
    <Screen style={styles.container}>
      <OrderListings orders={orders} setQuantity={setQuantity} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2.5,
  },
});

export default OrdersScreen;

// Tamil
