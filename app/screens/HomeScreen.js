import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import images from "../config/images";
import useCategories from "../hooks/useCategories";
import CategoryList from "../components/listing/categories/CategoryList";
import HomeFooter from "../components/listing/categories/HomeFooter";
import HomeHeader from "../components/listing/categories/HomeHeader";
import InfoScreen from "./utils/InfoScreen";
import routes from "../routes/routes";

function HomeScreen({ navigation }) {
  const [categories, loading, setUpdated] = useCategories();

  const header = () => (
    <HomeHeader
      onSearch={(query) => navigation.navigate(routes.PRODUCTS, { query })}
    />
  );

  const footer = () => <HomeFooter loading={loading} />;

  const info = () => (
    <InfoScreen
      buttonTitle="Retry"
      title="Something went wrong"
      description="check your internet connection and retry"
      action={() => navigation.replace(routes.HOME)}
      image={images.noProds}
      visible={!loading}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        refreshing={loading}
        onRefresh={() => setUpdated(true)}
        stickyHeaderIndices={[0]}
        ListFooterComponent={footer}
        ListHeaderComponent={header}
        ListEmptyComponent={info}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <CategoryList
            title={item.title}
            data={item.data}
            loading={loading}
            onSelect={() => navigation.push(routes.SUB_CATEGORIES)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: defaultStyles.colors.background,
  },
});

export default HomeScreen;

// Sudharsan
