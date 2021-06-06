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
  visible = true,
}) {
  const { height } = useWindowDimensions();

  if (!visible) return null;
  return (
    <Screen
      style={{
        ...styles.container,
        height: height / 1.15,
        flex: 2,
        backgroundColor: "#F5F5F8"
      }}
    >
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
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    position: "absolute",
    top: "10%",
    width: 113.13,
    height: 99.13,
    alignSelf: "center",
    resizeMode: "stretch"
  },

  title: {
    fontSize: 28,
    marginTop: 10,
    color: "#333",
    textAlign: "center"
  },

  desc: {
    marginTop: 20,
    color: "#555",
    textAlign: "center"
  },

  button: {
    position: "absolute",
    width: "70%",
    bottom: 70,
  },
});

export default InfoScreen;

// Sudharshan
