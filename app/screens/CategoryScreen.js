import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import InfoScreen from "./utils/InfoScreen";
import images from "../config/images";

import categoryApi from "../api/category";
import useApi from "./../hooks/useApi";
import Screen from "./../components/Screen";
import AppText from "./../components/AppText";
import CategoryListItem from "../components/listing/Category/CategoryListItem";
import routes from "../routes/routes";

function CategoryScreen({ navigation, route }) {
  const { items, loading, refresh } = useApi(categoryApi.getAllCategories);

  const handleShowDetails = (item) => {
    navigation.navigate(routes.HOME_PRODUCTS, { category: item });
  };

  const renderItem = (item) => (
    <CategoryListItem item={item} onPress={() => handleShowDetails(item)} />
  );
  const info = (loading) => (
    <InfoScreen
      title="No address found"
      description="Add your first address"
      visible={!loading}
      image={images.noProds}
      buttonTitle="Add Address"
      action={refresh}
    />
  );

  return (
    <Screen style={styles.container}>
      <View style={styles.headingTitle}>
        <AppText style={styles.heading}>Categories</AppText>
      </View>
      <View style={styles.categoryList}>
        <FlatList
          ListEmptyComponent={info}
          numColumns={2}
          refreshing={loading}
          onRefresh={refresh}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F8",
    padding: 5,
    marginBottom: "5%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: "2.5%",
  },
  headingTitle: {
    marginTop: 5,
  },
  categoryList: {
    marginVertical: 5,
  },
});

export default CategoryScreen;

// Sudharsan
