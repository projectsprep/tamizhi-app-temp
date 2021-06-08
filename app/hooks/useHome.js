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
  } = useApi(homeApi.getCategories, { rows: 10 });

  const {
    items: foodItemsObjs,
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

  const foodItems =
    foodItemsObjs?.map((prod) => ({
      ...prod,
      product_id: prod.id,
      name: prod.pname,
      seller: prod.sname,
      categoryId: prod.cid,
      subCategoryId: prod.sid,
      description: prod.psdesc,
      is_assured: true,
      rating: 2.35,
      price: prod.pprice,
      order_type: "multiple",
      image_uris: [prod.pimg],
    })) ?? [];

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
