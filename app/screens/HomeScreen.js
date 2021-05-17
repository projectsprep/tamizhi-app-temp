import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>HOME</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;

// Tamil
