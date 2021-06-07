import React, { useState } from "react";
import {
  RefreshControl,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";

import Screen from "./../components/Screen";
import Banner from "./../components/banner";
import CategoryHomeList from "../components/listing/home/CategoryHomeList";
import FoodHomeList from "../components/listing/home/FoodHomeList";
import Icon from "./../components/Icon";
import useHome from "../hooks/useHome";
import routes from "../routes/routes";
import SubcategoryHomeList from "./../components/listing/home/SubCategoryHomeList";
import { MaterialCommunityIcons } from "@expo/vector-icons";


function HomeScreen({ navigation, route }) {
  const [search, setSearch] = useState("");
  const { home, loading, refresh } = useHome();

  const handleSearch = (query) => {
    navigation.navigate(routes.PRODUCTS, {
      screen: routes.SEARCH,
      params: { query },
    });
  };

  const handleShowCats = () => {
    navigation.navigate(routes.CATEGORIES);
  };

  const handleShowSubCats = () => {
    navigation.navigate(routes.SUB_CATEGORIES);
  };

  const handleShowProds = () => {
    navigation.navigate(routes.SEARCH);
  };

  const handleCatDetails = (item) => {
    navigation.navigate(routes.HOME_PRODUCTS, { category: item });
  };

  const handleSubCatDetails = (item) => {
    navigation.navigate(routes.HOME_PRODUCTS, { subCategory: item });
  };

  const handleProdDetails = (item) => {
    navigation.push(routes.PRODUCT_DETAILS, { product: item });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.searchRow}>
              <MaterialCommunityIcons
                name="magnify"
                size={25}
                color="#333"
                style={styles.icon}
              />
            <TextInput
              value={search}
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={setSearch}
              returnKeyType="search"
              onSubmitEditing={() => handleSearch(search)}
            />
              {/* <Icon name="magnify" backgroundColor="#333" size={30} /> */}
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refresh} />
          }
        >
          <Banner data={home.banners} />
          <View style={styles.mainView}>
            <CategoryHomeList
              data={home.categories}
              showMore={handleShowCats}
              showDetails={handleCatDetails}
            />
            <SubcategoryHomeList
              data={home.subCategories}
              showMore={handleShowSubCats}
              showDetails={handleSubCatDetails}
            />
            <FoodHomeList
              data={home.foodItems}
              showMore={handleShowProds}
              showDetails={handleProdDetails}
            />
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
    marginTop: 15,
    position: "relative",
    width: "100%",
    alignSelf: "center",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333"
  },
  mainView: {
    position: "relative",
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 10
  },
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    backgroundColor: "#F5F5Fb",
    paddingHorizontal: 4,
    paddingVertical: 7,
    borderRadius: 7,
    height: 50,
  },
  searchInput: {
    paddingHorizontal: 10,
    paddingTop: 5,
    width: "100%",
    alignSelf: "center",
    // borderBottomColor: "#aaa",
    // borderBottomWidth: 2,
    fontSize: 15,
    marginRight: 4,
  },
});

export default HomeScreen;

// Tamil
