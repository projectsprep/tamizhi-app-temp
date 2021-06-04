import _ from "lodash";
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

  const products =
    listing?.map((prod) => ({
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

  const isLoading = prodsLoading || catsLoading;

  const refreshListing = () => {
    refreshProds();
    refreshCats();
  };

  return {
    products,
    categories: items,
    loading: isLoading,
    isMore,
    refresh: refreshListing,
  };
}

// Tamil
