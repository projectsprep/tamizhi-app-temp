import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import LoadingScreen from "../../../screens/utils/LoadingScreen";
import AppText from "../../AppText";

function ProductsFooter({ onPress, isMore, visible }) {
  const { width } = useWindowDimensions();
  return isMore ? (
    <View style={{ ...styles.container, width }}>
      <LoadingScreen visible={isMore} />
    </View>
  ) : (
    <View style={{ ...styles.container, width, height: 50 }}>
      {visible && <AppText>No more items</AppText>}
    </View>
  );
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
