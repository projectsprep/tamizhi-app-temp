import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import api from "../../../config/api";
import AppText from "./../../AppText";

function SubCategoryHomeItem({ item, onPress }) {
  console.log(item);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.column}>
        <Image
          source={{
            uri: api.baseAssetUrl + item.img,
          }}
          style={styles.image}
        />
        <AppText ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {item.name}
        </AppText>
        <AppText style={styles.viewButton}>View products</AppText>
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
    width: "10%",
    backgroundColor: "#fff",
    marginHorizontal: 8,
    marginVertical: 6,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 20,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "stretch",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "700",
    width: 100,
    textAlign: "center",
    color: "#222",
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

export default SubCategoryHomeItem;

// Sudharsan
