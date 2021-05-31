import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./../components/AppText";

function HelpScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Help Text</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default HelpScreen;

// Tamil
