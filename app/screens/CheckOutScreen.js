import _ from "lodash";
import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../routes/routes";
import AppText from "./../components/AppText";
import CartContext from "./../context/CartContext";
import { ProductListItem, OrderListActions } from "./../components/listing";

function CheckOutScreen({ navigation, route }) {
  const [cart, cartLoading, setQuantity] = useContext(CartContext);

  const item = {
    id: 13,
    products: cart,
    totalPrice: 3968,
    status: "cancelled",
    createdAt: 1621776159248,
  };

  const onConfirm = () => {
    navigation.navigate(routes.PAYMENT, { payment_id: 25, order_id: 54, item });
  };

  const products = _.orderBy(item.products, "product_id", "desc");
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppText style={[styles.text, styles.id]}>orderId: {item.id}</AppText>
        <AppText style={[styles.text, styles.number]}>
          numberOfProducts: {item.products.length}
        </AppText>

        {products.map((item) => (
          <View style={styles.list} key={item.product_id}>
            <ProductListItem
              id={item.product_id}
              imageUri={item.image_uris[0]}
              title={item.name}
              rating={item.ratings}
              presentPrice={item.presentPrice}
              price={item.price}
              ActionBar={() => <OrderListActions quantity={item.quantity} />}
              onPress={() =>
                navigation.navigate(routes.CART_PRODUCT_DETAILS, {
                  product: item,
                })
              }
            />
          </View>
        ))}

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

export default CheckOutScreen;
