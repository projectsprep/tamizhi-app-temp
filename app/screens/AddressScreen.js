import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import defaultStyles from "../config/defaultStyles";
import routes from "../routes/routes";
import AppButton from "./../components/AppButton";
import useAddress from "./../hooks/useAddess";

function AddressScreen({ navigation, route }) {
  const { user_id } = { user_id: 52326 };
  const [addresses, loading, setUpdated] = useAddress();

  const mapped = addresses.filter((address) => address);

  const editAddress = (action, values) => {
    navigation.replace(routes.EDIT_ADDRESSES, {
      user_id,
      action,
      values,
    });
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={mapped}
          keyExtractor={(item, index) => item.id + ""}
          refreshing={loading}
          onRefresh={() => setUpdated(true)}
          ListHeaderComponent={() => (
            <View style={{ backgroundColor: defaultStyles.colors.white }}>
              <AppButton
                title="+ Add Address"
                onPress={() => editAddress("add")}
                style={styles.addItem}
                textStyle={styles.addText}
              />
            </View>
          )}
          stickyHeaderIndices={[0]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => editAddress("update", item)}
              style={styles.item}
            >
              <AppText>{item.label} : </AppText>
              <AppText>{item.doorNo},</AppText>
              <AppText>{item.addressLine1},</AppText>
              <AppText>{item.addressLine2},</AppText>
              <AppText>{`${item.pincode}`},</AppText>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: "90%",
    alignSelf: "center",
    backgroundColor: defaultStyles.colors.listItem,
  },

  addItem: {
    alignSelf: "center",
    width: "50%",
    backgroundColor: defaultStyles.colors.listItem,
  },

  addText: {
    color: "black",
  },
});

export default AddressScreen;
