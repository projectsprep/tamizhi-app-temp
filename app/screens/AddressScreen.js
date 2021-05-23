import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import routes from "../routes/routes";
import useAddress from "./../hooks/useAddess";
import InfoScreen from "./utils/InfoScreen";
import images from "../config/images";
import {
  Listing,
  AddressFooter,
  AddressHeader,
  AddressItem,
} from "../components/listing";

function AddressScreen({ navigation }) {
  const { user_id } = { user_id: 52326 };
  const [addresses, loading, setUpdated] = useAddress();

  const filtered = addresses.filter((address) => address);

  const editAddress = (action, values) => {
    navigation.replace(routes.EDIT_ADDRESSES, {
      user_id,
      action,
      values,
    });
  };

  const header = () => <AddressHeader onPress={() => editAddress("add")} />;
  const footer = () => <AddressFooter />;
  const addressItem = (item) => (
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
      <Listing
        items={filtered}
        refreshing={loading}
        ListEmptyComponent={info}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        onRefresh={() => setUpdated(true)}
        keyExtractor={(item, index) => item.id + ""}
        customListItem={(item) => addressItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddressScreen;
