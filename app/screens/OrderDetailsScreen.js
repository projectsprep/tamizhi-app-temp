import _ from "lodash";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import routes from "../routes/routes";
import AppText from "./../components/AppText";
import { ProductListItem, OrderListActions } from "./../components/listing";
import AppButton from "./../components/AppButton";
import Notifier from "../utility/Notifier";

function OrderDetailsScreen({ navigation, route }) {
  const { item } = route.params;

  const products = _.orderBy(item.products, "product_id", "desc");

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <AppText style={[styles.text, styles.id]}>orderId: {item.id}</AppText>
          <AppText style={[styles.text, styles.prodCount]}>
            numberOfProducts: {item.products.length}
          </AppText>
          <AppText style={[styles.text, styles.status]}>
            Status: {item.status}
          </AppText>
        </View>

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
                navigation.navigate(routes.ORDER_PRODUCT_DETAILS, {
                  product: item,
                })
              }
            />
          </View>
        ))}

        <View style={styles.foot}>
          <AppText style={[styles.text, styles.price]}>
            price: Rs.{item.totalPrice}
          </AppText>
          <AppButton
            title="Track Details"
            onPress={() => navigation.navigate(routes.ORDER_UPDATES, { item })}
          />
          <AppButton
            title="Back to cart"
            onPress={() => navigation.navigate(routes.CART, { item })}
          />
          <AppButton
            title="Help"
            onPress={() =>
              Notifier.toastLong("We are not here to help you f****r !")
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  text: {
    marginTop: 0,
    marginBottom: 25,
  },

  head: {
    padding: 25,
  },

  foot: {
    padding: 25,
  },

  list: {
    width: "90%",
    alignSelf: "center",
  },
});

export default OrderDetailsScreen;

// Tamil
