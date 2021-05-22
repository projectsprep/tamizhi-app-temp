import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItemSeparator } from "../components/listing";
import Icon from "../components/Icon";
import icons from "../config/icons";
import defaultStyles from "../config/defaultStyles";
import routes from "../routes/routes";
import Screen from "./../components/Screen";
import ListItem from "../components/listing/ListItem";

const menu = [
  {
    title: "My Orders",
    icon: {
      name: "cart",
      backgroundColor: defaultStyles.colors.primary,
    },
    targetScreen: routes.ORDERS,
  },
  {
    title: "Manage Address",
    icon: {
      name: "home",
      backgroundColor: defaultStyles.colors.secondary,
    },
    targetScreen: routes.ADDRESSES,
  },
];

const lines = [
  {
    title: "Help",
    icon: {
      name: "help-circle",
      backgroundColor: defaultStyles.colors.primaryDark,
    },
    targetScreen: routes.HELP,
  },
  {
    title: "Feedback",
    icon: {
      name: "reply",
      backgroundColor: defaultStyles.colors.success,
    },
    targetScreen: routes.FEEDBACK,
  },
];

function ProfileScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="User"
          subTitle="user@userbase.com"
          image={icons.logo}
          style={styles.account}
          onPress={() => navigation.navigate(routes.ACCOUNT)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menu}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              style={styles.item}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <FlatList
        data={lines}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            style={styles.item}
            IconComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
      />
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        style={styles.logout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.white,
  },

  container: {
    marginVertical: 20,
  },

  account: {
    backgroundColor: defaultStyles.colors.white,
  },

  logout: {
    backgroundColor: defaultStyles.colors.white,
  },

  item: {
    backgroundColor: defaultStyles.colors.listItem,
  },
});

export default ProfileScreen;

// Tamil
