import homeApi from "../api/home";
import useApi from "./useApi";

export default function useProductListing() {
  const {
    items: banners,
    loading: bannerLoading,
    refresh: refreshBanner,
  } = useApi(homeApi.getBanners);

  const {
    items: categories,
    loading: categoryLoading,
    refresh: refreshCategory,
  } = useApi(homeApi.getCategories);

  const {
    items: foodItems,
    loading: foodItemsLoading,
    refresh: refreshFoodItems,
  } = useApi(homeApi.getFoodItems);

  //   Structurin
  const home = { banners, categories: categories.slice(0, 4), foodItems };

  const loading = bannerLoading || categoryLoading || foodItemsLoading;

  const refresh = () => {
    refreshBanner();
    refreshCategory();
    refreshFoodItems();
  };

  return { home, loading, refresh };
}

// Tamil
