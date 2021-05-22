import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import _ from "lodash";

import images from "../config/images";
import InfoScreen from "./utils/InfoScreen";
import Screen from "./../components/Screen";
import {
  ProductListing,
  ProductsHeader,
  ProductsFooter,
  OrderListActions,
} from "../components/listing";
import useProducts from "../hooks/useProducts";
import OrdersContext from "../context/OrdersContext";

function ProductsScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Food");
  const [page, setPage] = useState(1);

  const [orders, ordersLoading, setQuantity] = useContext(OrdersContext);
  const [prods, categories, loading, isMore] = useProducts(
    page,
    search,
    category
  );

  const products = prods.map((prod) => {
    const found = orders.find((order) => order.product_id === prod.product_id);
    if (found) prod.quantity = found.quantity;
    return prod;
  });

  const handleSubmit = ({ search: s, category: c }) => {
    if (s) setSearch(s);
    if (c) setCategory(c.value);
  };

  const onSearch = (s) => {
    console.log(154);
    if (s) setSearch(s);
  };

  const footer = () => (
    <ProductsFooter navigation={navigation} isMore={isMore} loading={loading} />
  );

  const header = () => (
    <ProductsHeader
      onSearch={onSearch}
      setCategory={setCategory}
      navigation={navigation}
      categories={categories}
      onSubmit={handleSubmit}
      current={{ category, search }}
    />
  );

  const actions = (item) => (
    <OrderListActions
      quantity={item.quantity}
      setQuantity={(action) => setQuantity(item.product_id, action)}
    />
  );

  const info = () => (
    <InfoScreen
      title="No Items Found"
      description="Try other keywords or Try Refreshing"
      image={images.noOrders}
      visible={!loading && !ordersLoading}
    />
  );

  return (
    <Screen style={styles.container}>
      <ProductListing
        products={products}
        navigation={navigation}
        onEndReached={() => setPage(page + 1)}
        refreshing={loading}
        onRefresh={() => setPage(1)}
        stickyHeaderIndices={[0]}
        initialNumToRender={5}
        footer={footer}
        header={header}
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

export default ProductsScreen;

// Tamil
