import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./../components/AppText";
import ImageSlider from "./../components/ImageSlider";
import { CartListActions } from "../components/listing";
import routes from "../routes/routes";
import useCartContext from "./../hooks/useCartContext";
import api from "../config/api";
import { setNestedObjectValues } from "formik";

function ProductDetailsScreen({ navigation, route }) {
  const { cart, setQuantity } = useCartContext();

  const { isDisplayOnly = false, product } = route.params;
  const found = cart.find((prod) => product.product_id === prod.product_id);
  const quantity = found ? found.quantity : 0;

  const images = product.image_uris.map((uri) => api.baseAssetUrl + uri);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageSlider}>
          <ImageSlider images={images} />
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>
            {product.title || product.name}
          </AppText>
          <AppText style={styles.seller}>{product.seller}</AppText>
          <AppText style={styles.price}>Rs. {product.price}</AppText>
          <AppText style={styles.desc}>{product.description}</AppText>
        </View>

        {!isDisplayOnly && (
          <View style={styles.actionContainer}>
            <CartListActions
              type={product.order_type}
              onPress={() => navigation.navigate(routes.BOOK, { product })}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
  },
  seller: {
    color: "#444",
    fontSize: 16
  },
  detailsContainer: {
    padding: 20,
  },
  actionContainer: {
    padding: 20,
  },
  imageSlider: {
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
    fontWeight: "700",
  },
  userContainer: {
    marginVertical: 40,
  },
  desc:{
    fontSize: 18,
    textTransform: "lowercase",
    color: "#222",
  }
});

export default ProductDetailsScreen;

// Tamil
