import React from "react";
import { StyleSheet } from "react-native";
import Listing from "./../components/listing/Listing";
import Screen from "./../components/Screen";
import InfoScreen from "./utils/InfoScreen";
import ProductListItem from "./../components/listing/products/ProductListItem";
import CartListActions from "./../components/listing/products/CartListActions";
import products from "../api/products";
import ProductsFooter from "./../components/listing/products/ProductsFooter";
import useApi from "./../hooks/useApi";
import _ from "lodash";
import images from "../config/images";
import routes from "../routes/routes";

function ProductsListScreen({ route, navigation }) {
  const { category, subCategory } = route.params;

  const fetcher = () => {
    if (category) return products.getProducts;
    if (subCategory) return products.getProductsOfShops;
    else throw "error";
  };

  const isMore = false;

  const handleLoadMore = () => {};

  const { items, loading, refresh } = useApi(fetcher(), {
    category,
    subCategory,
  });

  const prods =
    items?.map((prod) => ({
      ...prod,
      product_id: prod.id,
      name: prod.pname,
      seller: prod.sname,
      categoryId: prod.cid,
      subCategoryId: prod.sid,
      description: prod.psdesc,
      is_assured: true,
      rating: 2.35,
      price: prod.pprice,
      order_type: "multiple",
      image_uris: [prod.pimg],
    })) ?? [];

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

  const footer = () => {
    const hasMore = prods.length !== 0 && isMore;
    const noMore = prods.length !== 0 && !loading;
    return <ProductsFooter isMore={hasMore} visible={noMore} />;
  };

  const info = () => {
    return (
      <InfoScreen
        title={"No Items in this shop"}
        description={"Try Refreshing Again"}
        image={images.noProds}
        visible={!loading}
      />
    );
  };
  return (
    <Screen style={styles.container}>
      <Listing
        items={_.orderBy(prods, "product_id", "desc")}
        footer={footer}
        refreshing={loading}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        onRefresh={refresh}
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
    paddingHorizontal: 5,
    backgroundColor: "#F5F5F8"
  },
});

export default ProductsListScreen;
