import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import useAddress from "./../hooks/useAddess";
import InfoScreen from "./utils/InfoScreen";
import images from "../config/images";
import SubCategoryHomeItem from "../components/listing/home/SubCategoryHomeItem";

function SubCategoryScreen({ navigation, route }) {
  const { addresses, setUpdated } = useAddress();

  const filtered = addresses.filter((address) => address);

  const renderItem = (item) => (
    <SubCategoryHomeItem
      address={item}
      onPress={() => editAddress("update", item)}
    />
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
        data={filtered}
        ListEmptyComponent={info}
        keyExtractor={(item, index) => item.id + ""}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubCategoryScreen;

// Tamil
