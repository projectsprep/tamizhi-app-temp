import React from "react";
import { StyleSheet } from "react-native";
import _ from "lodash";

import images from "../config/images";
import InfoScreen from "./utils/InfoScreen";
import Screen from "../components/Screen";
import LoadingScreen from "./utils/LoadingScreen";
import {
  Listing,
  ProductListItem,
  CartFooter,
  CartHeader,
  CartListActions,
} from "../components/listing";
import routes from "../routes/routes";
import useCartContext from "./../hooks/useCartContext";

function CartScreen({ navigation }) {
  const [cart, loading, setQuantity] = useCartContext();

  const header = () => (
    <CartHeader
      onPress={() => navigation.navigate(routes.CHECK_OUT, { cart })}
      visible={cart.length !== 0 && !loading}
    />
  );

  const footer = () => <CartFooter visible={!loading} />;

  const info = () => (
    <InfoScreen
      title="Cart is empty"
      description="You don't have any Product here"
      buttonTitle="Let's Shop"
      action={() => navigation.navigate(routes.PRODUCTS)}
      image={images.noProds}
      visible={!loading}
    />
  );

  const productItem = (item, onSelect) => (
    <ProductListItem
      id={item.product_id}
      imageUri={item.image_uris[0]}
      title={item.name}
      rating={item.ratings}
      presentPrice={item.presentPrice}
      price={item.price}
      onPress={() => onSelect(item)}
      ActionBar={() => (
        <CartListActions
          type={item.order_type}
          onPress={() => navigation.navigate(routes.BOOK, { product: item })}
          quantity={item.quantity}
          setQuantity={(action) => setQuantity(item.product_id, action)}
        />
      )}
    />
  );

  return (
    <>
      <LoadingScreen visible={loading} />
      <Screen style={styles.container}>
        <Listing
          items={_.orderBy(cart, "product_id", "desc")}
          stickyHeaderIndices={[0]}
          customListItem={productItem}
          header={header}
          footer={footer}
          emptyInfoScreen={info}
          onSelect={(item) =>
            navigation.navigate(routes.CART_PRODUCT_DETAILS, {
              product: item,
            })
          }
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2.5,
  },
});

export default CartScreen;

// Tamil
