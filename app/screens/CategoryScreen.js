import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import routes from "../routes/routes";
import InfoScreen from "./utils/InfoScreen";
import images from "../config/images";

import {
  AddressHeader,
  AddressFooter,
  CategoryListItem,
} from "./../components/listing";
import categoryApi from "../api/categoryApi";
import useApi from "./../hooks/useApi";

function CategoryScreen({ navigation, route }) {
  const { user_id } = { user_id: 52326 };
  const { items, loading } = useApi(categoryApi.getAllCategories);

  console.log(items);

  const filtered = items.filter((cat) => cat);

  const editAddress = (action, values) => {
    navigation.navigate(routes.EDIT_ADDRESSES, {
      user_id,
      action,
      values,
    });
  };

  const header = () => <AddressHeader onPress={() => editAddress("add")} />;
  const footer = () => <AddressFooter />;
  const renderItem = (item) => (
    <CategoryListItem catimg={item.icon} catname={item.label} />
  );
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
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        style={styles.container}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.column}
        data={filtered}
        refreshing={loading}
        ListEmptyComponent={info}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        onRefresh={() => setUpdated(true)}
        keyExtractor={(item, index) => item.category_id + ""}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  list: {
    width: "100%",
    justifyContent: "space-around",
  },
  column: {
    flexShrink: 1,
  },
});

export default CategoryScreen;
