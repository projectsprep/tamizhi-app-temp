import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import api from "../../../config/api";

// import Icon from "../../Icon";
import style from "../../../config/defaultStyles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function CategoryHomeItem({ item, backgroundColor, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor }]}
      onPress={onPress}
    >
      <Image
        source={{
          uri: api.baseAssetUrl + item.catimg,
        }}
        style={styles.image}
      />
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {item.catname}
      </Text>
      <View style={styles.icon}>
        {/* <Icon name="chevron-right" backgroundColor="#333" size={25} /> */}
        <MaterialCommunityIcons color="#333" name="chevron-right" size={25} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    // backgroundColor: "#EFB60E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 7,
    marginHorizontal: 5,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 8,
    width: 120,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "#111",
    fontSize: 14,
    textTransform: "capitalize",
  },
  image: {
    paddingHorizontal: 2,
    height: "70%",
    width: 100,
    resizeMode: "stretch",
    alignSelf: "center",
  },
  icon: {
    marginTop: 4,
    alignSelf: "center",
    backgroundColor: style.colors.btnColor,
    borderRadius: 20
  },
});

export default CategoryHomeItem;

// Sudharsan
