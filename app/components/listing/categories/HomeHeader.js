import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import defaultStyles from "../../../config/defaultStyles";
import AppTextInput from "./../../AppTextInput";

function HomeHeader({ onSearch }) {
  return (
    <View style={styles.container}>
      {/* <Image source={images.noOrders} style={styles.orderImage} /> */}
      <TouchableOpacity onPress={onSearch}>
        <AppTextInput
          onSearch={onSearch}
          placeholder="search"
          containerStyle={styles.input}
          style={styles.search}
          width={"85%"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
    // height: 100,
  },

  orderImage: {
    height: 26,
    width: 26,
    alignSelf: "flex-end",
  },

  input: {
    alignSelf: "center",

    height: 50,
  },

  search: {
    alignSelf: "center",
  },
});

export default HomeHeader;

// Sudharsan
