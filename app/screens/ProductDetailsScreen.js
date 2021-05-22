import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./../components/AppText";
import ImageSlider from "./../components/ImageSlider";
import { CartListActions } from "../components/listing";
import CartContext from "../context/CartContext";

function ProductDetailsScreen({ route }) {
  const [cart, cartLoading, setQuantity] = useContext(CartContext);
  const { product } = route.params;
  const found = cart.find((prod) => product.product_id === prod.product_id);
  const quantity = found ? found.quantity : 0;

  return (
    <View>
      <ImageSlider images={product.image_uris} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{product.title || product.name}</AppText>
        <AppText style={styles.price}>Rs. {product.presentPrice}</AppText>
        <AppText>{product.description}</AppText>
      </View>
      <CartListActions quantity={quantity} setQuantity={setQuantity} />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ProductDetailsScreen;

// Tamil