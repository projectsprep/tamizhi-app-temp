import React from "react";
import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import AppText from "./AppText";

function AccountHead(props) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width, height: height / 2.5 }]}>
      <Image
        style={styles.profilePic}
        source={{
          uri: "https://i.pinimg.com/474x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg",
        }}
      />
      <AppText style={styles.headUsername}>super user</AppText>
      <AppText style={styles.headMobile}>identified with 7894561230</AppText>
    </View>
  );
}

const profilePicHeight = 175;

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    flex: 1,
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  profilePic: {
    alignSelf: "center",
    height: profilePicHeight,
    width: profilePicHeight,
    borderRadius: profilePicHeight / 2,
  },

  headUsername: {
    marginBottom: 10,
  },

  headMobile: {
    fontSize: 15,
  },
});

export default AccountHead;
