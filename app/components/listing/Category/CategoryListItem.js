import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import api from "../../../config/api";
import AppText from "../../AppText";

function CategoryListItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.column}>
        <Image
          source={{
            uri: api.baseAssetUrl + item.catimg,
          }}
          style={styles.catimg}
        />
        <AppText ellipsizeMode="tail" numberOfLines={2} style={styles.catname}>
          {item.catname}
        </AppText>
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
    elevation: 5,
    backgroundColor: "#fff",
    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "49%",
    marginHorizontal: 2,
    justifyContent: "center",
    borderRadius: 15,
  },
  catname: {
    textTransform: "capitalize",
    marginTop: 10,
    fontSize: 13,
    textAlign: "center",
    fontWeight: "700",
    color: "#444",
  },
  catimg: {
    height: 100,
    width: "80%",
    resizeMode: "stretch",
    borderRadius: 30
  },
  column: {
    alignItems: "center",
    marginVertical: 10,
  },
});

export default CategoryListItem;

// Sudharsan
