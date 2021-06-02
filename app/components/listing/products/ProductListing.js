import React from "react";
import { FlatList } from "react-native";
import _ from "lodash";

import ProductListItem from "./ProductListItem";

function CartListing({
  products,
  onSelect,
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
      initialNumToRender={5}
      ListHeaderComponent={() => header()}
      ListFooterComponent={() => footer()}
      ListEmptyComponent={() => emptyInfoScreen()}
      renderItem={({ item }) => {
        return (
          <ProductListItem
            item={item}
            onPress={() => onSelect(item)}
            ActionBar={() => actions(item)}
          />
        );
      }}
      {...otherProps}
    />
  );
}

export default CartListing;

// Tamil
