import { useState, useEffect } from "react";
import cartApi from "../api/cartApi";
import Notifier from "../utility/Notifier";
import wishListApi from "../api/wishListApi";

export default function useCart(user_id) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const setQuantity = (product_id, action) => {
    const product = cart.find((prod) => prod.product_id === product_id);
    if (product && action === "add") return;
    if (!product && action != "add") return;
    const newProducts = cart.filter((prod) => prod.product_id !== product_id);
    const oldQuantity = product ? product.quantity : 1;

    async function add() {
      const addRes = await cartApi.increaseCount({
        user_id,
        product_id,
      });
      if (!addRes.ok) {
        Notifier.toastLong(addRes.data.message);
      }
      setCart([...newProducts, addRes.data]);
    }

    async function increment() {
      const incRes = await cartApi.increaseCount({
        user_id,
        product_id,
      });
      if (!incRes.ok) {
        product.quantity = oldQuantity;
        Notifier.toastLong(resRes.data.message);
        setCart([...newProducts, product]);
      }
    }

    async function decrement() {
      const resDec = await cartApi.decreaseCount({
        user_id,
        product_id,
      });
      if (!resDec.ok) {
        product.quantity = oldQuantity;
        Notifier.toastLong(resDec.data.message);
        setCart([...newProducts, product]);
      }
    }

    async function remove() {
      const resRm = await cartApi.remove({
        user_id,
        product_id,
      });
      if (!resRm.ok) {
        product.quantity = oldQuantity;
        Notifier.toastLong(resRm.data.message);
        setCart([...newProducts, product]);
      }
    }

    async function saveForLater() {
      const resRmd = await cartApi.remove({
        user_id,
        product_id,
      });
      const resSav = await wishListApi.save({
        user_id,
        product_id,
      });
      if (!resRmd.ok) {
        product.quantity = oldQuantity;
        Notifier.toastLong(resRmd.data.message);
        setCart([...newProducts, product]);
      }
      if (!resSav.ok) {
        Notifier.toastLong("Error Adding product to Wishlist");
      }
    }

    switch (action) {
      case "add":
        return add();

      case "inc":
        if (product.quantity >= product.product.stock)
          return Notifier.toastLong("Out of stock");

        product.quantity = product.quantity + 1;
        setCart([...newProducts, product]);

        return increment();

      case "dec":
        product.quantity = product.quantity - 1;
        setCart([...newProducts, product]);

        return decrement();

      case "remove":
        setCart(newProducts);
        return remove();

      case "save":
        setCart(newProducts);
        return saveForLater();

      default:
        break;
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    setLoading(true);

    const response = await cartApi.getCart({ user_id: 1 });
    if (!response.ok) return setLoading(false);

    setCart(response.data);
    setLoading(false);
  };

  return { cart, loading, setQuantity, refresh: getCart };
}
