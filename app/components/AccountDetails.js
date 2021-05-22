import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import AppButton from "./AppButton";
import AddressItem from "./listing/Address/AddressItem";

function AccountDetails({ address, onEdit, onAddress }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.text}>
          <AppText style={styles.detail}>Name: super user</AppText>
          <AppText style={styles.detail}>Email: user@userbase.com</AppText>
          <AppText style={styles.detail}>Phone: 9876543210</AppText>
        </View>
        <AppButton
          icon="account-edit"
          style={styles.editButton}
          onPress={onEdit}
        />
      </View>
      <View style={styles.address}>
        <AddressItem address={address} onPress={onAddress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  editButton: {
    width: 50,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  detail: {
    marginTop: 25,
  },

  address: {
    marginTop: 50,
    marginBottom: 50,
  },
});

export default AccountDetails;
