import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import routes from "../routes/routes";
import useAddress from "./../hooks/useAddess";
import AddressHeader from "../components/listing/address/AddressHeader";
import AddressFooter from "../components/listing/address/AddressFooter";
import InfoScreen from "./utils/InfoScreen";
import images from "../config/images";
import AddressItem from "../components/listing/address/AddressItem";

function SubCategoryScreen({ navigation, route }) {
  const { user_id } = { user_id: 52326 };
  const [addresses, loading, setUpdated] = useAddress();

  const filtered = addresses.filter((address) => address);

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
    <AddressItem address={item} onPress={() => editAddress("update", item)} />
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
        refreshing={loading}
        ListEmptyComponent={info}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        onRefresh={() => setUpdated(true)}
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
