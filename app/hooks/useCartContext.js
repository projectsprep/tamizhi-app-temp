import { useContext } from "react";
import CartContext from "./../context/CartContext";

function useCartContext(props) {
  const { cart, cartLoading, setQuantity } = useContext(CartContext);
  return { cart, cartLoading, setQuantity };
}

export default useCartContext;
