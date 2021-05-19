import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import _ from "lodash";

import images from "../config/images";
import InfoScreen from "./utils/InfoScreen";
import Screen from "./../components/Screen";
import LoadingScreen from "./utils/LoadingScreen";
import {
  ProductListing,
  OrdersFooter,
  OrdersHeader,
  OrderListActions,
} from "./../components/Listings";
import routes from "../routes/routes";
import ordersContext from "../context/OrdersContext";

function OrdersScreen({ navigation }) {
  const [orders, loading, setQuantity] = useContext(ordersContext);

  const header = (products) => (
    <OrdersHeader navigation={navigation} visible={!loading} />
  );

  const footer = (products) => (
    <OrdersFooter navigation={navigation} visible={!loading} />
  );

  const actions = (item) => (
    <OrderListActions
      quantity={item.quantity}
      setQuantity={(action) => setQuantity(item.product_id, action)}
    />
  );

  const info = () => (
    <InfoScreen
      title="No orders yet"
      description="You don't have any orders here"
      buttonTitle="Let's Shop"
      action={() => navigation.navigate(routes.PRODUCTS)}
      image={images.noOrders}
      visible={!loading}
    />
  );

  return (
    <Screen style={styles.container}>
      <LoadingScreen visible={loading} />
      <ProductListing
        products={orders}
        setQuantity={setQuantity}
        navigation={navigation}
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

export default OrdersScreen;

// Tamil
