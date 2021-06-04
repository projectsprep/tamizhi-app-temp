import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import defaultStyles from "../../../config/defaultStyles";
import LoadingScreen from "../../../screens/utils/LoadingScreen";

function ProductsFooter({ onPress, isMore }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ ...styles.container, width }}>
      {isMore && (
        <LoadingScreen
          visible={isMore}
          backgroundColor={defaultStyles.colors.transparent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProductsFooter;

// Tamil
