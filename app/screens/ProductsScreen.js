import React, { useState } from "react";
import { StyleSheet } from "react-native";

import images from "../config/images";
import InfoScreen from "./utils/InfoScreen";
import Screen from "./../components/Screen";
import {
  Listing,
  ProductListItem,
  ProductsHeader,
  ProductsFooter,
  CartListActions,
} from "../components/listing";
import routes from "../routes/routes";
import useCartContext from "./../hooks/useCartContext";
import useProductListing from "./../hooks/useProductsLIsting";
import _ from "lodash";

function ProductsScreen({ navigation, route }) {
  const query = route.params?.query ?? "";
  const [search, setSearch] = useState(query);
  const [category, setCategory] = useState("Food");
  const [page, setPage] = useState(1);

  const { cart, cartLoading, setQuantity } = useCartContext();
  const { products, categories, loading, isMore, refresh } = useProductListing(
    page,
    search,
    category
  );

  const prods = products.map((product) => {
    const found = cart.find((prod) => prod.product_id === product.product_id);
    if (found) product.quantity = found.quantity;
    return product;
  });

  const handleLoadMore = () => {
    if (!loading && isMore) setPage(page + 1);
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

  const header = () => (
    <ProductsHeader
      onSearch={onSearch}
      setCategory={setCategory}
      categories={categories}
      onSubmit={handleSubmit}
      current={{ category, search }}
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

  const info = () => {
    const searched = search !== "" && (!loading || !cartLoading);
    if (searched)
      return (
        <InfoScreen
          title="No Items Found"
          description="Try other keywords or Try Refreshing"
          image={images.noProds}
          visible={true}
        />
      );
    else return null;
  };

  return (
    <Screen style={styles.container}>
      <Listing
        items={_.orderBy(prods, "product_id", "desc")}
        footer={footer}
        header={header}
        refreshing={loading}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        onRefresh={handleRefresh}
        stickyHeaderIndices={[0]}
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
    paddingHorizontal: 2.5,
  },
});

export default ProductsScreen;

// Tamil
