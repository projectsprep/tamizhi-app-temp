import React from "react";
import { StyleSheet, FlatList } from "react-native";

import InfoScreen from "./utils/InfoScreen";
import images from "../config/images";

import { CategoryHomeItem } from "./../components/listing";
import categoryApi from "../api/categoryApi";
import useApi from "./../hooks/useApi";
import Screen from "./../components/Screen";

function CategoryScreen({ navigation, route }) {
  const { items, loading } = useApi(categoryApi.getAllCategories);

  console.log(items);

  const filtered = items.filter((cat) => cat);

  const renderItem = (item) => <CategoryHomeItem item={item} />;
  const info = (loading) => (
    <InfoScreen
      title="No address found"
      description="Add your first address"
      visible={!loading}
      image={images.noProds}
      buttonTitle="Add Address"
      action={() => setUpdated(true)}
    />
  );

  return (
    <Screen style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        numColumns={2}
        data={filtered}
        ListEmptyComponent={info}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => renderItem(item)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: { height: "100%" },
});

export default CategoryScreen;

// Tamil
