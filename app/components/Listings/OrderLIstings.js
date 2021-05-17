import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import _ from "lodash";

import ListItem from "../ListItem";
import OrderListActions from "../OrderListActions";
import AppButton from "../AppButton";

function OrderListings({ orders, setQuantity, navigation }) {
  return (
    <FlatList
      data={_.orderBy(orders, "product_id", "desc")}
      keyExtractor={(item, index) => item.product_id + ""}
      ListFooterComponent={() => <View style={{ height: 80 }} />}
      renderItem={({ item }) => {
        return (
          <ListItem
            imageUri={item.image_uris[0]}
            title={item.name}
            description={item.description}
            ActionBar={() => (
              <OrderListActions
                quantity={item.quantity}
                setQuantity={(action) => setQuantity(item.product_id, action)}
              />
            )}
          />
        );
      }}
      ListHeaderComponent={() => (
        <View style={styles.checkView}>
          <AppButton
            title="Check Out"
            onPress={() => navigation.navigate(routes.HOME)}
            color="primaryDark"
            style={styles.button}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: "60%",
    alignSelf: "center",
  },

  checkView: {
    flex: 1,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});

export default OrderListings;

// Tamil
