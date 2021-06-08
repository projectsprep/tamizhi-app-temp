import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import images from "../config/images";
import InfoScreen from "./utils/InfoScreen";
import Screen from "../components/Screen";
import {
  Listing,
  ProductListItem,
  ProductsHeader,
  ProductsFooter,
  CartListActions,
} from "../components/listing";
import routes from "../routes/routes";
import useCartContext from "../hooks/useCartContext";
import useProductListing from "../hooks/useProductsLIsting";
import _ from "lodash";

function ProductsSearchScreen({ navigation, route }) {
  const query = route.params?.query ?? "choco";
  const [search, setSearch] = useState(query);
  const [category, setCategory] = useState("FOOD");
  const [page_number, setPage] = useState(1);

  useEffect(() => {
    setSearch(query);
  }, [route]);

  const { cart, cartLoading, setQuantity } = useCartContext();
  const {
    products,
    categories: cats,
    loading,
    isMore,
    refresh,
  } = useProductListing(page_number, search, category, 5);

  const categories = cats.map((cat) => ({
    ...cat,
    label: cat.catname.toString(),
    value: cat.catname.toString(),
  }));

  const prods = !products
    ? []
    : products.map((product) => {
        const found = cart.find(
          (prod) => prod.product_id === product.product_id
        );
        if (found) product.quantity = found.quantity;
        return product;
      });

  const handleLoadMore = () => {
    if (!loading && isMore) setPage(page_number + 1);
  };

  const handleRefresh = () => {
    setPage(1);
    refresh();
  };

  const handleSubmit = ({ search: s, category: c }) => {
    if (s) setSearch(s);
    if (c) setCategory(c.value);
  };

  const onSearch = (s) => {
    if (s) setSearch(s);
  };

  const footer = () => {
    const hasMore = prods.length !== 0 && isMore;
    const noMore = prods.length !== 0 && (!loading || !cartLoading);
    return <ProductsFooter isMore={hasMore} visible={noMore} />;
  };

  const productItem = (item, onSelect) => (
    <ProductListItem
      item={item}
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

  const info = () => {
    const searched = search !== "" && (!loading || !cartLoading);
    return (
      <InfoScreen
        title={searched ? "No Items Found" : "Search Products"}
        description={
          searched
            ? "Try other keywords or Try Refreshing"
            : "Search your favorite products"
        }
        image={images.noProds}
        visible={!loading}
      />
    );
  };

  return (
    <Screen style={styles.container}>
      <ProductsHeader
        onSearch={onSearch}
        setCategory={setCategory}
        categories={categories}
        onSubmit={handleSubmit}
        current={{ category, search }}
      />
      <Listing
        items={_.orderBy(prods, "product_id", "desc")}
        footer={footer}
        refreshing={loading}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        onRefresh={handleRefresh}
        emptyInfoScreen={info}
        customListItem={productItem}
        onSelect={(item) =>
          navigation.navigate(routes.PRODUCT_DETAILS, {
            product: item,
          })
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F8",
    paddingHorizontal: 2.5,
  },
});

export default ProductsSearchScreen;

// Tamil
