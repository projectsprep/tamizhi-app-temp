import React, { useState } from "react";
import { StyleSheet } from "react-native";
import _ from "lodash";

import {
  Listing,
  HomeFooter,
  HomeHeader,
  SubCategoryListItem,
} from "../components/listing";
import routes from "../routes/routes";
import images from "../config/images";
import Screen from "./../components/Screen";
import InfoScreen from "./utils/InfoScreen";
import AppText from "./../components/AppText";
import useSubCategories from "../hooks/useSubCategories";
import useCartContext from "./../hooks/useCartContext";

function HomeScreen({ navigation, route }) {
  const query = route.params?.query ?? "";
  const [search, setSearch] = useState(query);
  const [category, setCategory] = useState("Food");
  const [page, setPage] = useState(1);

  const [cart, cartLoading, setQuantity] = useCartContext();
  const [subCategories, categories, loading, isMore] = useSubCategories(
    page,
    search,
    category
  );

  const subCats = subCategories.map((product) => {
    const found = cart.find((prod) => prod.product_id === product.product_id);
    // filter and count all the products in the subCategory and set the quantity of the subCategory
    if (found) product.quantity = found.quantity;
    return product;
  });

  const handleSubmit = ({ search: s, category: c }) => {
    if (s) setSearch(s);
    if (c) setCategory(c.value);
  };

  const onSearch = (s) => (s ? setSearch(s) : null);

  const header = () => (
    <HomeHeader
      onSearch={onSearch}
      setCategory={setCategory}
      categories={categories}
      onSubmit={handleSubmit}
      current={{ category, search }}
    />
  );

  const footer = () => {
    const noMore = subCategories.length !== 0 && (!loading || !cartLoading);
    return <HomeFooter isMore={isMore} visible={noMore} />;
  };

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

  const productItem = (item, onSelect) => (
    <SubCategoryListItem
      id={item.product_id}
      imageUri={item.image_uris[0]}
      title={item.name}
      rating={item.ratings}
      onPress={() => onSelect(item)}
      ActionBar={() => <AppText>{item.quantity}</AppText>}
    />
  );

  return (
    <Screen style={styles.container}>
      <Listing
        items={_.orderBy(subCats, "product_id", "desc")}
        footer={footer}
        header={header}
        refreshing={loading}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
        onRefresh={() => setPage(1)}
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

export default HomeScreen;

// Tamil
