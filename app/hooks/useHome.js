import homeApi from "../api/home";
import useApi from "./useApi";

export default function useProductListing() {
  const {
    items: bannersObjs,
    loading: bannerLoading,
    refresh: refreshBanner,
  } = useApi(homeApi.getBanners);

  const {
    items: categories,
    loading: categoryLoading,
    refresh: refreshCategory,
  } = useApi(homeApi.getCategories, { rows: 4 });

  const {
    items: foodItems,
    loading: foodItemsLoading,
    refresh: refreshFoodItems,
  } = useApi(homeApi.getFoodItems, { rows: 20 });

  const {
    items: subCategoriesObjs,
    loading: subCategoryLoading,
    refresh: refreshSubCategory,
  } = useApi(homeApi.getSubCategories, { rows: 10 });

  //   Structuring
  const banners = bannersObjs.map((banner) => ({
    ...banner,
    bimg: "/assets/images/" + banner.bimg,
  }));

  const subCategories = subCategoriesObjs.map((subCat) => ({
    ...subCat,
    img: "/assets/images/" + subCat.img,
  }));

  const home = { banners, categories, subCategories, foodItems };

  const loading =
    bannerLoading || categoryLoading || foodItemsLoading || subCategoryLoading;

  const refresh = () => {
    refreshBanner();
    refreshCategory();
    refreshFoodItems();
    refreshSubCategory();
  };

  return { home, loading, refresh };
}

// Tamil
