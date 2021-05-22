import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./../components/AppText";
import ImageSlider from "./../components/ImageSlider";
import { OrderListActions } from "../components/listing";
import OrdersContext from "./../context/OrdersContext";

function ProductDetailsScreen({ route }) {
  const [orders, ordersLoading, setQuantity] = useContext(OrdersContext);
  const { product } = route.params;
  const found = orders.find((order) => product.product_id === order.product_id);
  const quantity = found ? found.quantity : 0;

  return (
    <View>
      <ImageSlider images={product.image_uris} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{product.title || product.name}</AppText>
        <AppText style={styles.price}>Rs. {product.presentPrice}</AppText>
        <AppText>{product.description}</AppText>
      </View>
      <OrderListActions quantity={quantity} setQuantity={setQuantity} />
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
