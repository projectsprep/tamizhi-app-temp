import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import defaultStyles from "../../../config/defaultStyles";
import AppText from "./../../AppText";

function CategoryListItem({ catname, catimg, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppText
          style={styles.categoryName}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {catname}
        </AppText>
        <Image source={{ uri: catimg }} style={styles.categoryImages} />
        <TouchableOpacity>
          <AppText style={styles.link}>See more</AppText>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.listItem,
    height: 200,
    width: 150,
    borderRadius: 15,
    marginHorizontal: 6,
    padding: 9,
  },

  link: {
    color: "#007185",
    fontSize: 10,
    marginTop: 8,
  },

  items: {
    marginTop: 5,
    paddingHorizontal: 10,
  },

  categoryImages: {
    height: "70%",
    width: "100%",
  },

  categoryName: {
    textAlign: "center",
    textTransform: "lowercase",
    paddingHorizontal: 2,
    marginVertical: 5,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default CategoryListItem;
