import React from "react";
import LottieView from "lottie-react-native";
import animations from "../config/animations";

function ActivityIndicator({ visible, animation, ...otherProps }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={animation}
      style={styles.container}
      {...otherProps}
    />
  );
}

export default ActivityIndicator;

// Tamil
