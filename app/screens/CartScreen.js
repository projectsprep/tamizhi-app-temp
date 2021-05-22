import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import _ from "lodash";

import images from "../config/images";
import InfoScreen from "./utils/InfoScreen";
import Screen from "../components/Screen";
import LoadingScreen from "./utils/LoadingScreen";
import {
  ProductListing,
  CartFooter,
  CartHeader,
  CartListActions,
} from "../components/listing";
import routes from "../routes/routes";
import CartContext from "../context/CartContext";

function CartScreen({ navigation }) {
  const [cart, loading, setQuantity] = useContext(CartContext);

  const header = (products) => (
    <CartHeader navigation={navigation} visible={!loading} />
  );

  const footer = (products) => (
    <CartFooter navigation={navigation} visible={!loading} />
  );

  const actions = (item) => (
    <CartListActions
      quantity={item.quantity}
      setQuantity={(action) => setQuantity(item.product_id, action)}
    />
  );

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

  return (
    <Screen style={styles.container}>
      <LoadingScreen visible={loading} />
      <ProductListing
        products={cart}
        setQuantity={setQuantity}
        onSelect={(item) =>
          navigation.navigate(routes.PRODUCT_DETAILS, {
            product: item,
          })
        }
        stickyHeaderIndices={[0]}
        initialNumToRender={5}
        header={header}
        footer={footer}
        actions={actions}
        emptyInfoScreen={info}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2.5,
  },
});

export default CartScreen;

// Tamil
