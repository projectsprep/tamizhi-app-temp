import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import LoadingScreen from "../../../screens/utils/LoadingScreen";

function CategoryFooter({ loading }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ ...styles.container, width }}>
      <LoadingScreen visible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CategoryFooter;

// Tamil
