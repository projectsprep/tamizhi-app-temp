import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { ListItemSeparator } from "../components/listing";
import Icon from "../components/Icon";
import icons from "../config/icons";
import defaultStyles from "../config/defaultStyles";
import routes from "../routes/routes";
import Screen from "./../components/Screen";
import ListItem from "../components/listing/ListItem";
import useAuth from "./../auth/useAuth";

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
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <ListItem
            // title={user.username}
            // subTitle={user.mobile + "\n" + user.email}
            title="user"
            subTitle="some user"
            image={icons.logo}
            style={styles.account}
            onPress={() => navigation.navigate(routes.ACCOUNT)}
          />
        {/* </View>
        <View style={styles.container}> */}
          <View style={styles.container}>
            {menu.map((item, index) => (
              <View key={item.title + index}>
                <ListItem
                  title={item.title}
                  style={styles.item}
                  IconComponent={
                    <Icon
                      name={item.icon.name}
                      // backgroundColor={item.icon.backgroundColor}
                      backgroundColor="#183e96"
                    />
                  }
                  onPress={() => navigation.navigate(item.targetScreen)}
                />
                {/* <ListItemSeparator /> */}
              </View>
            ))}
          {/* </View>
          <View style={styles.container}> */}
            {lines.map((item, index) => (
              <View key={item.title + index}>
                <ListItem
                  title={item.title}
                  style={styles.item}
                  IconComponent={
                    <Icon
                      name={item.icon.name}
                      // backgroundColor={item.icon.backgroundColor}
                      backgroundColor="#183e96"
                    />
                  }
                  onPress={() =>
                    navigation.navigate(item.targetScreen, {
                      redirect: routes.PROFILE_OPTIONS,
                    })
                  }
                />
                {/* <ListItemSeparator /> */}
              </View>
            ))}
            <ListItem
              title="Log Out"
              style={styles.logout}
              IconComponent={<Icon name="logout" backgroundColor="#183e96" />}
              onPress={logout}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F5F5F8",
  },

  container: {
    marginVertical: 10,
  },

  account: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,

    backgroundColor: defaultStyles.colors.white,
    borderRadius: 20,
    marginVertical: 13,
  },

  logout: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,

    backgroundColor: defaultStyles.colors.white,
    borderRadius: 20,
    fontWeight: "600",
    marginVertical: 13,
  },

  item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,

    backgroundColor: defaultStyles.colors.white,
    borderRadius: 20,
    marginVertical: 13,
  },
});

export default ProfileScreen;

// Tamil
