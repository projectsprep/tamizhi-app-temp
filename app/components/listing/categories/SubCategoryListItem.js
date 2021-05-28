import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";

import defaultStyles from "../../../config/defaultStyles";
import AppText from "../../AppText";

const itemColor = defaultStyles.colors.listItem;

function SubCategoryListItem({
  imageUri,
  title,
  rating = 2.35,
  onPress,
  ActionBar,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.details}>
          <AppText style={styles.title} numberOfLines={3}>
            {title}
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
    borderRadius: 25,
    backgroundColor: itemColor,
  },

  image: {
    flex: 1,
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 50,
  },

  details: {
    padding: 10,
    flex: 1,
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 18,
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

export default SubCategoryListItem;

// Tamil
