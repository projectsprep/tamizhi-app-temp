import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import useAddress from "../hooks/useAddess";
import routes from "../routes/routes";
import Screen from "./../components/Screen";
import AccountHead from "../components/AccountHead";
import AccountDetails from "../components/AccountDetails";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AccountScreen({ navigation }) {
  // const [user, loading, updateUser] = useUsers();
  const account = {
    name: "super user",
    email: "user@userbase.com",
    mobile: "9876543210",
  };
  const [addresses, loading, setUpdated] = useAddress();

  const onEdit = () => navigation.navigate(routes.EDIT_USER_DETAILS, account);

  const onAddress = () => navigation.navigate(routes.ADDRESSES);

  return (
    <Screen>
      <AccountHead />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.body}>
          <MaterialCommunityIcons
            name="chevron-up"
            color="grey"
            size={35}
            style={styles.chevron}
          />
          <AccountDetails
            address={addresses[0]}
            onAddress={onAddress}
            onEdit={onEdit}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const bodyRadius = 25;

const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },

  chevron: {
    alignSelf: "center",
  },

  body: {
    marginTop: "100%",
    flex: 1,
    flexGrow: 1,
    backgroundColor: "white",
    borderTopLeftRadius: bodyRadius,
    borderTopRightRadius: bodyRadius,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 100,
  },
});

export default AccountScreen;

// Tamil
