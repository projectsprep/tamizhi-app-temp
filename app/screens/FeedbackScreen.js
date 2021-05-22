import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function FeedbackScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Feedback Screen</AppText>
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

export default FeedbackScreen;
