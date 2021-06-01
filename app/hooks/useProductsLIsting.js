import _ from "lodash";
import { TabBarIOS } from "react-native";
import categoryApi from "../api/category";
import productsApi from "../api/products";
import useApi from "./useApi";
import useSearchListing from "./useSearchListing";

export default function useProductListing(page_number, search, category) {
  const {
    listing,
    loading: prodsLoading,
    isMore,
    refresh: refreshProds,
  } = useSearchListing(
    productsApi.searchProducts,
    page_number,
    search,
    category,
    5
  );

  const {
    items,
    loading: catsLoading,
    refresh: refreshCats,
  } = useApi(categoryApi.getAllCategories);

  const isLoading = prodsLoading || catsLoading;
  const refreshListing = () => {
    refreshProds();
    refreshCats();
  };

  return {
    products: listing,
    categories: items,
    loading: isLoading,
    isMore,
    refresh: refreshListing,
  };
}

// Tamil
