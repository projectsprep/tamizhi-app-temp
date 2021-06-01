import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "../components/Icon";
import Banner from "./../components/banner";
import FoodHomeList from "../components/listing/home/FoodHomeList";
import CategoryHomeList from "../components/listing/home/CategoryHomeList";

const pics = [
  "http://192.168.10.10:3001/images/4.jpg",
  "http://192.168.10.10:3001/images/3.jpg",
];

export default function HomePage() {
  const [searchText, onChangeSearchText] = useState("");

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topView}>
            <View style={styles.searchRow}>
              <TextInput
                placeholder="Search..."
                value={searchText}
                onChangeText={onChangeSearchText}
                style={styles.searchInput}
              />
              <TouchableOpacity>
                <Icon name="magnify" backgroundColor="#333" size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <Banner images={pics} />
          <View style={styles.mainView}>
            <CategoryHomeList />
            <FoodHomeList />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F8",
  },
  topView: {
    position: "relative",
    paddingTop: 40,
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

// Tamil
