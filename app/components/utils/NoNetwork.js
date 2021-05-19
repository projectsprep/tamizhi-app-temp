import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./../AppText";

function NoNetwork({ visible }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <AppText>No internet connection...</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NoNetwork;
