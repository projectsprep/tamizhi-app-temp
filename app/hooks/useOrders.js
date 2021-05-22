import { useState, useEffect } from "react";
import ordersApi from "../api/ordersApi";
import Notifier from "../utility/Notifier";
import wishListApi from "../api/wishListApi";

export default function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user_id } = { user_id: 52326 };

  const setQuantity = (product_id, action) => {
    const order = orders.find((order) => order.product_id === product_id);
    if (order && action === "add") return;
    if (!order && action != "add") return;
    const newOrders = orders.filter((order) => order.product_id !== product_id);
    const oldQuantity = order ? order.quantity : 1;
    console.log(action);

    async function add() {
      const addRes = await ordersApi.increaseCount({
        user_id,
        product_id,
      });
      if (!addRes.ok) {
        Notifier.toastLong(addRes.data.message);
      }
      setOrders([...newOrders, addRes.data]);
    }

    async function increment() {
      const incRes = await ordersApi.increaseCount({
        user_id,
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
        user_id,
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
        user_id,
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
        user_id,
        product_id,
      });
      const resSav = await wishListApi.save({
        user_id,
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
      case "add":
        return add();

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

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    setLoading(true);

    const response = await ordersApi.getOrders({ user_id: 1 });
    if (!response.ok) return setLoading(false);

    setOrders(response.data);
    setLoading(false);
  };

  return [orders, loading, setQuantity];
}
