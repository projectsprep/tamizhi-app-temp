import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import defaultStyles from "../../config/defaultStyles";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={{ ...styles.container, ...style }}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 5,
    padding: 15,
    backgroundColor: defaultStyles.colors.listItem,
    borderRadius: 7.5,
    width: "95%",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;

// Tamil
