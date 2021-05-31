import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";

import Screen from "./../components/Screen";
import Banner from "./../components/banner";
import CategoryList from "./../components/listing/home/CategoryList";
import FoodProductList from "./../components/listing/home/FoodProductList";
import Icon from "./../components/Icon";
import useHome from "../hooks/useHome";
import routes from "../routes/routes";

function HomeScreen({ navigation, route }) {
  const [search, onChangeSearchText] = useState("");

  const { home, loading, refresh } = useHome();

  const handleSearch = (query) => {
    navigation.navigate(routes.PRODUCTS, { query });
  };

  const handleShowCats = (query) => {
    navigation.navigate(routes.CATEGORIES);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topView}>
            <View style={styles.searchRow}>
              <TextInput
                value={search}
                style={styles.searchInput}
                placeholder="Search..."
                onChangeText={onChangeSearchText}
                returnKeyType="search"
                onSubmitEditing={() => handleSearch(search)}
              />
              <TouchableOpacity onPress={() => handleSearch(search)}>
                <Icon name="magnify" backgroundColor="#333" size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <Banner images={home.banners} />
          <View style={styles.mainView}>
            <CategoryList data={home.categories} showMore={handleShowCats} />
            <FoodProductList data={home.foodItems} />
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F8",
  },
  topView: {
    position: "relative",
    width: "100%",
    alignSelf: "center",
    paddingBottom: 15,
  },
  mainView: {
    position: "relative",
  },
  profileIcon: {},
  ordersIcon: {
    height: 30,
    width: 30,
    resizeMode: "stretch",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  searchRow: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  searchInput: {
    paddingHorizontal: 10,
    paddingTop: 5,
    width: "93%",
    alignSelf: "center",
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
    fontSize: 15,
    marginRight: 4,
  },
});

export default HomeScreen;

// Tamil
