import React from "react";
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import AppText from "../../components/AppText";

function Replace({ navigation, path, title, style }) {
  const handleTouch = () => {
    navigation.replace(path);
  };
  return (
    <TouchableNativeFeedback style={styles.container} onPress={handleTouch}>
      <AppText style={style}>
        {"   "}
        {title}
      </AppText>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10 },
});

export default Replace;
