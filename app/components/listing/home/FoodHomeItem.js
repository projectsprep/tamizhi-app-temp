import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import api from "../../../config/api";

function FoodHomeItem({ item, Action, onPress }) {
  return (
    <View style={[styles.productItem]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.productRow}>
            <Text
              style={styles.productTitle}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {item.pname}
            </Text>
            <Text style={styles.desc} ellipsizeMode="tail" numberOfLines={1}>
              {item.psdesc}
            </Text>
            <Text
              style={styles.sellerName}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {item.sname}
            </Text>
          </View>
          <Image
            source={{
              uri: api.baseAssetUrl + item.pimg,
            }}
            style={styles.productImage}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.actionBar}>
        <Action />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    paddingHorizontal: 5,
    paddingTop: 15,
    marginVertical: 7,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  productImage: {
    justifyContent: "flex-end",
    height: "100%",
    width: 100,
    resizeMode: "stretch",
  },
  productRow: {
    flex: 1,
    margin: 10,
  },
  productTitle: {
    fontWeight: "700",
    textTransform: "capitalize",
    width: "60%",
    color: "#222",
  },
  desc: {
    width: "60%",
    fontSize: 13,

    textTransform: "lowercase",
    color: "#666",
  },
  sellerName: {
    width: "60%",
    color: "#444",

    textTransform: "capitalize",
  },

  actionBar: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default FoodHomeItem;

// Sudharsan
