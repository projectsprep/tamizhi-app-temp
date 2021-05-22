import React from "react";
import { FlatList } from "react-native";
import _ from "lodash";

import routes from "../../../routes/routes";
import ProductListItem from "./ProductListItem";

function ProductListing({
  products,
  navigation,
  detailsPage = routes.PRODUCT_DETAILS,
  actions = () => null,
  header = () => null,
  footer = () => null,
  emptyInfoScreen = () => null,
  onEndReached = () => null,
  ...otherProps
}) {
  return (
    <FlatList
      data={_.orderBy(products, "product_id", "desc")}
      keyExtractor={(item, index) => `${item.product_id}-${index}`}
      stickyHeaderIndices={[0]}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      initialNumToRender={5}
      ListHeaderComponent={() => header()}
      ListFooterComponent={() => footer()}
      ListEmptyComponent={() => emptyInfoScreen()}
      renderItem={({ item }) => {
        return (
          <ProductListItem
            id={item.product_id}
            imageUri={item.image_uris[0]}
            title={item.name}
            rating={item.ratings}
            presentPrice={item.presentPrice}
            price={item.price}
            onPress={() =>
              navigation.navigate(detailsPage, {
                product: item,
              })
            }
            ActionBar={() => actions(item)}
          />
        );
      }}
      {...otherProps}
    />
  );
}

export default ProductListing;

// Tamil
