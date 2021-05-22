import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import CategoryListItem from "./CategoryListItem";
import LoadingScreen from "./../../../screens/utils/LoadingScreen";
import defaultStyles from "../../../config/defaultStyles";

export default function Categories({ title, data, loading, onSelect }) {
  return (
    <>
      <LoadingScreen visible={loading} />
      <View style={styles.container}>
        <Text style={styles.heading}>
          {title + " "}
          <TouchableOpacity>
            <Text style={styles.link}>See more</Text>
          </TouchableOpacity>
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.category_id + ""}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryListItem
              catname={item.label}
              catimg={item.icon}
              onPress={onSelect}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.listLane,
  },

  heading: {
    marginHorizontal: 15,
    fontSize: 15,
    fontWeight: "600",
  },

  link: {
    color: "#007185",
    fontSize: 10,
    marginTop: 8,
  },

  img: {
    height: "70%",
    width: "100%",
  },

  name: {
    textAlign: "center",
    textTransform: "lowercase",
    paddingHorizontal: 2,
    marginVertical: 5,
    fontSize: 15,
    fontWeight: "600",
  },
});
