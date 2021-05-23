import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import defaultStyles from "../../../config/defaultStyles";
import AppTextInput from "./../../AppTextInput";

function HomeHeader({ onSearch }) {
  const [query, setQuery] = useState("");
  return (
    <View style={styles.container}>
      {/* <Image source={images.noOrders} style={styles.orderImage} /> */}
      {/* <TouchableOpacity onPress={onSearch}> */}
      <AppTextInput
        returnKeyType="search"
        onSearch={onSearch}
        placeholder="search"
        containerStyle={styles.input}
        onChangeText={(text) => setQuery(text)}
        style={styles.search}
        onSearch={() => onSearch(query)}
        width={"85%"}
      />
      {/* </TouchableOpacity> */}
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
