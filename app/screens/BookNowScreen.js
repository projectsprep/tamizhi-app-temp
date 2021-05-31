import _ from "lodash";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../routes/routes";
import AppText from "../components/AppText";
import { ProductListItem, OrderListActions } from "../components/listing";

function BookNowScreen({ navigation, route }) {
  const { product } = route.params;

  const item = {
    id: 13,
    product: [product],
    totalPrice: 3968,
    status: "cancelled",
    createdAt: 1621776159248,
  };

  const onConfirm = () => {
    navigation.navigate(routes.PAYMENT, { payment_id: 25, order_id: 54, item });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <AppText style={[styles.text, styles.id]}>orderId: {item.id}</AppText>

        <View style={styles.list} key={product.product_id}>
          <ProductListItem
            id={product.product_id}
            imageUri={product.image_uris[0]}
            title={product.name}
            rating={product.ratings}
            presentPrice={product.presentPrice}
            price={product.price}
            onPress={() =>
              navigation.navigate(routes.CART_PRODUCT_DETAILS, {
                product: product,
              })
            }
          />
        </View>

        <AppText style={[styles.text, styles.price]}>
          price: Rs.{item.totalPrice}
        </AppText>
        <AppButton
          title="Proceed Payment"
          onPress={onConfirm}
          style={styles.submit}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    paddingHorizontal: 20,
  },

  list: {
    width: "100%",
    alignSelf: "center",
  },

  submit: {
    marginTop: 50,
    width: "75%",
    alignSelf: "center",
  },

  text: {
    marginTop: 0,
    marginBottom: 20,
  },

  price: {
    marginTop: 25,
  },
});

export default BookNowScreen;

// Tamil
