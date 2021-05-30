import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import SubCategoryListItem from "./SubCategoryListItem";

export default function SubcategoryList() {
  const data = [
    {
      id: 1,
      img: "http://192.168.10.10:3001/images/4.jpg",
      name: "fasdklfj",
    },
  ];

  const renderItem = ({ item }) => {
    return <SubCategoryListItem item={item} />;
  };

  return (
    <View style={styles.subcategory}>
      <View style={styles.headingTitle}>
        <Text style={styles.heading}>Subcategories</Text>
        <TouchableOpacity>
          <Text style={styles.headingLink}>see more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subcategoryList}>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subcategory: {
    flex: 1,
    marginTop: 14,
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
