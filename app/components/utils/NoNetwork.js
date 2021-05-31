import React, { useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import defaultStyles from "../../config/defaultStyles";
import AppText from "./../AppText";
import { useNetInfo } from "@react-native-community/netinfo";

function NoNetwork({ action }) {
  const netinfo = useNetInfo();
  const network = netinfo.isConnected && netinfo.isInternetReachable;

  useEffect(() => {
    if (network) action();
  }, [network]);

  if (network) return null;

  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <AppText style={styles.text}>YOU ARE OFFLINE</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: defaultStyles.colors.danger,
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default NoNetwork;

// Tamil
