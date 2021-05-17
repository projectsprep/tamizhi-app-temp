import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style, ...otherProps }) {
  return (
    <SafeAreaView style={[styles.screen, style]} {...otherProps}>
      <View style={[styles.view, style]} {...otherProps}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
  },
  view: {
    flex: 1,
  },
});

export default Screen;

// Tamil
