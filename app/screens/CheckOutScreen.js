import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../routes/routes";
import AppText from "./../components/AppText";

function CheckOutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppText>Check Out Screen</AppText>
      <AppButton title="Next" onPress={() => null} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CheckOutScreen;
