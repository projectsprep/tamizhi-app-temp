import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import api from "../../../config/api";
import AppText from "../../AppText";

function CategoryListItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.column}>
        <AppText ellipsizeMode="tail" numberOfLines={2} style={styles.catname}>
          {item.catname}
        </AppText>
        <Image
          source={{
            uri: api.baseAssetUrl + item.catimg,
          }}
          style={styles.catimg}
        />
      </View>
    </TouchableOpacity>
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
    elevation: 8,
    backgroundColor: "#fff",
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "46%",
    marginHorizontal: 7,
    justifyContent: "center",
    borderRadius: 0,
  },
  catname: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "700",
    color: "#444",
  },
  catimg: {
    height: 100,
    width: "100%",
    resizeMode: "stretch",
  },
  column: {
    alignItems: "center",
    marginVertical: 10,
  },
});

export default CategoryListItem;

// Sudharsan
