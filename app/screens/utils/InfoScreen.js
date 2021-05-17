import React from "react";
import { StyleSheet, Image } from "react-native";
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
  loading,
}) {
  if (loading) return null;
  return (
    <Screen style={styles.container}>
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
