import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import _ from "lodash";

import ListItem from "./ListItem";

function Listing({
  keyProp = "product_id",
  items,
  onSelect,
  header = () => null,
  footer = () => null,
  emptyInfoScreen = () => null,
  onEndReached = () => null,
  customListItem = (item) => ListItem(item),
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={{ ...styles.container, width }}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item[keyProp]}-${index}`}
        stickyHeaderIndices={[0]}
        onEndReached={onEndReached}
        initialNumToRender={5}
        ListHeaderComponent={() => header()}
        ListFooterComponent={() => footer()}
        ListEmptyComponent={() => emptyInfoScreen()}
        renderItem={({ item }) => customListItem(item, onSelect)}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
});

export default Listing;

// Tamil
