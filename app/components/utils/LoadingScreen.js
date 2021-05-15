import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import animations from "../../config/animations";

function LoadingScreen({ visible = false, ...otherProps }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={animations.loading}
      style={styles.loading}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "grey",
  },
});

export default LoadingScreen;
