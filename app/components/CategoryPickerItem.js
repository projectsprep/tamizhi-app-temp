import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          backgroundColor={item.backgroundColor}
          source={{ uri: item.icon }}
          style={styles.image}
          radius={10}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
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
  },
});

export default CategoryPickerItem;

// Tamil
