import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";

import defaultStyles from "../../../config/defaultStyles";
import AppText from "../../AppText";

const itemColor = defaultStyles.colors.listItem;

function ProductListItem({
  id,
  imageUri,
  title,
  rating = 2.35,
  presentPrice = 10.54,
  price = 10,
  onPress,
  ActionBar,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.details}>
          <AppText style={styles.title} numberOfLines={3}>
            {`${title}-${id}`}
          </AppText>
          <View style={styles.ratingBox}>
            <Rating
              tintColor={itemColor}
              type="star"
              ratingCount={5}
              startingValue={rating}
              readonly={true}
              imageSize={20}
              style={styles.ratingStars}
            />
            <AppText style={styles.ratingCount}>{rating}</AppText>
          </View>
          <AppText style={styles.presentPrice}>
            ₹{presentPrice.toFixed(2) + " "}
            {price && price !== presentPrice && (
              <AppText style={styles.price}>₹{price.toFixed(2)}</AppText>
            )}
          </AppText>
        </View>
      </TouchableOpacity>
      {ActionBar && <ActionBar />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#d1d1d1",
    backgroundColor: "#fff",
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: itemColor,
    marginVertical: 5,
  },

  item: {
    flexDirection: "row",
    borderColor: "#d1d1d1",
    backgroundColor: "#fff",
    paddingVertical: 5,
    borderRadius: 15,
    backgroundColor: itemColor,
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: "contain",
  },

  details: {
    padding: 10,
    flex: 3,
  },

  title: {
    fontSize: 18,
  },

  presentPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    fontSize: 12,
    fontWeight: "normal",
    textDecorationLine: "line-through",
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
  },
});

export default ProductListItem;

// Tamil
