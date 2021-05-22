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
  CartListActions,
} from "../components/listing";
import routes from "../routes/routes";
import CartContext from "./../context/CartContext";
import useProducts from "./../hooks/useProducts";

function ProductsScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Food");
  const [page, setPage] = useState(1);

  const [cart, cartLoading, setQuantity] = useContext(CartContext);
  const [prods, categories, loading, isMore] = useProducts(
    page,
    search,
    category
  );

  const products = prods.map((product) => {
    const found = cart.find((prod) => prod.product_id === product.product_id);
    if (found) product.quantity = found.quantity;
    return product;
  });

  const handleSubmit = ({ search: s, category: c }) => {
    if (s) setSearch(s);
    if (c) setCategory(c.value);
  };

  const onSearch = (s) => {
    console.log(154);
    if (s) setSearch(s);
  };

  const footer = () => <ProductsFooter isMore={isMore} loading={loading} />;

  const header = () => (
    <ProductsHeader
      onSearch={onSearch}
      setCategory={setCategory}
      categories={categories}
      onSubmit={handleSubmit}
      current={{ category, search }}
    />
  );

  const actions = (item) => (
    <CartListActions
      quantity={item.quantity}
      setQuantity={(action) => setQuantity(item.product_id, action)}
    />
  );

  const info = () => (
    <InfoScreen
      title="No Items Found"
      description="Try other keywords or Try Refreshing"
      image={images.noProds}
      visible={!loading && !cartLoading}
    />
  );

  return (
    <Screen style={styles.container}>
      <ProductListing
        products={products}
        navigation={navigation}
        onSelect={(item) =>
          navigation.navigate(routes.PRODUCT_DETAILS, {
            product: item,
          })
        }
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
