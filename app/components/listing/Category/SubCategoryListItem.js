import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import AppText from "./../../AppText";

function SubCategoryListItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.subcategoryItem} onPress={onPress}>
      <View style={styles.column}>
        <Image
          source={{
            uri: "https://project.tamizhistore.com/assets/images/" + item.img,
          }}
          style={styles.image}
        />
        <AppText ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {item.name}
        </AppText>
        {/* <AppText style={styles.viewButton}>View products</AppText> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subcategoryItem: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    width: "49%",
    backgroundColor: "#fff",
    marginHorizontal: 2,
    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    justifyContent: "center"
  },
  image: {
    height: 100,
    width: "80%",
    resizeMode: "stretch",
    borderRadius: 30
  },
  column: {
    flex: 1,
    flexDirection: "column",
    marginVertical: 10,
    alignItems: "center"
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
    color: "#444",
    marginTop: 10
  },
  viewButton: {
    height: 30,
    width: "80%",
    textAlign: "center",
    backgroundColor: "#EFB60E",
    marginTop: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: "#333",
    paddingTop: 3,
    fontSize: 12,
  },
});

export default SubCategoryListItem;

// Sudharsan
