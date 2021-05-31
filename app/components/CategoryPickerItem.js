import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import api from "../config/api";

import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          // backgroundColor={item.backgroundColor}
          source={{
            uri: api.baseAssetUrl + item.catimg,
          }}
          style={styles.image}
          radius={10}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.catname}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
    width: "33%",
  },

  image: { width: 100, height: 100, borderRadius: 15 },

  label: {
    marginTop: 5,
    textAlign: "center",
    color: "black",
    fontSize: 12,
  },
});

export default CategoryPickerItem;

// Tamil
