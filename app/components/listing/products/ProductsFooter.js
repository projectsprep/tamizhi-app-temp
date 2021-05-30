import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import defaultStyles from "../../../config/defaultStyles";
import LoadingScreen from "../../../screens/utils/LoadingScreen";

function ProductsFooter({ onPress, isMore }) {
  const { width } = useWindowDimensions();
  return isMore ? (
    <View style={{ ...styles.container, width }}>
      <LoadingScreen
        visible={isMore}
        backgroundColor={defaultStyles.colors.transparent}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProductsFooter;

// Tamil
