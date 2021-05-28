import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import animations from "../../config/animations";
import defaultStyles from "../../config/defaultStyles";

function LoadingScreen({ visible = false, isFull, ...otherProps }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView autoPlay loop source={animations.loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: defaultStyles.colors.white,
    position: "absolute",
    zIndex: 10,
    opacity: 0.7,
  },
});

export default LoadingScreen;

// Tamil
