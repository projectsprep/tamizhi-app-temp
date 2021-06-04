import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import SubCategoryHomeItem from "./SubCategoryHomeItem";
import AppText from "./../../AppText";

export default function SubcategoryHomeList({ data, showMore, showDetails }) {
  return (
    <View style={styles.container}>
      <View style={styles.headingTitle}>
        <AppText style={styles.heading}>Shops</AppText>
        <TouchableOpacity onPress={showMore}>
          <AppText style={styles.headingLink}>see more</AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.subcategoryList}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item) => (
            <SubCategoryHomeItem
              key={item.id}
              item={item}
              onPress={() => showDetails(item)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 14,
    marginBottom: 14,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#333",
  },
  headingLink: {
    color: "#4e8de3",
    fontWeight: "700",
    fontSize: 14,
    marginRight: 5,
    marginTop: 4,
  },
  headingTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subcategoryList: {
    paddingHorizontal: 7,
  },
});

// Sudharsan
