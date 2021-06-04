import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FoodHomeItem from "./FoodHomeItem";
import CartListActions from "../products/CartListActions";

export default function FoodHomeList({ data, showMore, showDetails }) {
  const renderProduct = ({ item }) => {
    return (
      <FoodHomeItem
        key={item.id}
        item={item}
        onPress={() => showDetails(item)}
        Action={() => (
          <CartListActions
            type="multiple"
            onPress={() => null}
            quantity={0}
            setQuantity={() => null}
          />
        )}
      />
    );
  };

  return (
    <View style={styles2.products}>
      <View style={styles2.headingTitle}>
        <Text style={styles2.heading}>Food items</Text>
        <TouchableOpacity onPress={showMore}>
          <Text style={styles2.headingLink}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles2.productList}>
        {data.map((item) => renderProduct({ item }))}
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#333",
  },
  products: {
    position: "relative",
    width: "100%",
  },
  productList: {
    paddingHorizontal: 10,
  },

  addIcon: {
    position: "absolute",
    top: 72,
    left: 0,
    borderBottomLeftRadius: 10,
    borderTopEndRadius: 20,
    borderColor: "#EFB60E",
    borderWidth: 2,
    backgroundColor: "#EFB60E",
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  headingTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingLink: {
    color: "#4e8de3",
    fontWeight: "700",
    fontSize: 14,
    marginRight: 5,
    marginTop: 4,
  },
});

// Sudharsan
