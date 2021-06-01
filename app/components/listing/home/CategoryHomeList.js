import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import CategoryHomeItem from "./CategoryHomeItem";

export default function CategoryHomeList({ data, showMore }) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#EFB60E" : "#fff";
    return (
      <CategoryHomeItem
        key={item.id}
        item={item}
        backgroundColor={backgroundColor}
        onPress={() => {
          setSelectedId(item.id);
        }}
      />
    );
  };

  return (
    <View style={styles.categories}>
      <View style={styles.headingTitle}>
        <Text style={styles.heading}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.headingLink} onPress={showMore}>
            see more
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    position: "relative",
    // backgroundColor: "blue",
    height: 240,
  },
  row: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#333",
  },
  categoryList: {
    // flex: 1,
    // flexDirection: "row"
    height: "90%",
    paddingBottom: 10,
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
});

// Sudharsann
