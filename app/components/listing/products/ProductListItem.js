import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";
import api from "../../../config/api";

import defaultStyles from "../../../config/defaultStyles";
import AppText from "../../AppText";

const itemColor = defaultStyles.colors.listItem;

function ProductListItem({ item, onPress, ActionBar }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Image
          style={styles.image}
          source={{ uri: api.baseAssetUrl + item.image_uris[0] }}
        />
        <View style={styles.details}>
          <AppText style={styles.title} numberOfLines={3}>
            {`${item.name}-${item.id}`}
          </AppText>
          <AppText style={styles.seller}>{item.seller}</AppText>
          <View style={styles.ratingBox}>
            <Rating
              tintColor="#eee"
              type="star"
              ratingCount={5}
              startingValue={item.rating}
              readonly={true}
              imageSize={20}
              style={styles.ratingStars}
            />
            <AppText style={styles.ratingCount}>{item.rating}</AppText>
          </View>
          <AppText style={styles.presentPrice}>
            ₹{item.price}
            {item.discount && item.discount !== "0" && (
              <AppText style={styles.discount}>{item.discount}%off</AppText>
            )}
          </AppText>
        </View>
      </TouchableOpacity>
      {ActionBar && (
        <View style={styles.actionBar}>
          <ActionBar />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    borderBottomWidth: 1,
    borderColor: "#d1d1d1",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginVertical: 5,
  },

  item: {
    flexDirection: "row",
    paddingTop: 5,
    borderRadius: 20,
  },
  seller: {
    color: "#555",
    fontSize: 15,
    textTransform: "lowercase"
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: "contain",
    borderRadius: 20
  },

  details: {
    padding: 10,
    flex: 3,
  },

  title: {
    fontSize: 18,
    color: "#222",
    textTransform: "capitalize"
  },

  presentPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444"
  },

  discount: {
    fontSize: 12,
    fontWeight: "normal",
    // textDecorationLine: "line-through",
  },

  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  ratingStars: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  ratingCount: {
    marginStart: 7.5,
    color: "#666",
    fontSize: 15
  },

  actionBar: {
    alignSelf: "center",
    width: "95%",
  },
});

export default ProductListItem;

// Tamil
