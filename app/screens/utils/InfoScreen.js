import React from "react";
import { StyleSheet, Image, View, useWindowDimensions } from "react-native";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";

function InfoScreen({
  title,
  description,
  image,
  buttonColor = "primaryDark",
  buttonTitle,
  action,
  visible,
}) {
  const { height } = useWindowDimensions();

  if (!visible) return null;
  return (
    <Screen style={{ ...styles.container, height: height / 1.15 }}>
      <View style={styles.info}>
        {image && <Image source={image} style={styles.image} />}
        <AppText style={styles.title}>{title}</AppText>
        {description && <AppText style={styles.desc}>{description}</AppText>}
        {buttonTitle && (
          <AppButton
            title={buttonTitle}
            color={buttonColor}
            style={styles.button}
            onPress={action}
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},

  info: {
    flex: 1,
    // position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    position: "absolute",
    top: "25%",
    width: 113.13,
    height: 99.13,
    alignSelf: "center",
  },

  title: {
    fontSize: 28,
    marginTop: 50,
  },

  desc: {
    marginTop: 20,
  },

  button: {
    position: "absolute",
    width: "70%",
    bottom: 70,
  },
});

export default InfoScreen;

// Sudharshan
