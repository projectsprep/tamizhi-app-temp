import _ from "lodash";
import { useState, useEffect } from "react";
import categoryApi from "../api/categoryApi";
import subCategoryApi from "../api/subCategoryApi";

export default function useProducts(page_number, search, category) {
  const [subCats, setSubCats] = useState([]);
  const [need, setNeed] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const per_page = 5;

  useEffect(() => {
    _.debounce(() => onQueryChange(), 500)();
  }, [search, category, need]);

  useEffect(() => {
    if (isMore) {
      onPageChange();
    }
    if (page_number === 1) return setNeed(true);
  }, [page_number]);

  const onQueryChange = async () => {
    setLoading(true);

    const catResponse = await categoryApi.getAllCategories();
    setCats(catResponse.data);

    const response = await subCategoryApi.searchCategories({
      user_id: 1,
      search,
      page_number,
      per_page,
      category,
    });

    if (!response.ok) return setLoading(false);
    setIsMore(response.data.isMore);
    setSubCats(response.data.data);

    setNeed(false);
    setLoading(false);
  };

  const onPageChange = async () => {
    const response = await subCategoryApi.searchCategories({
      user_id: 1,
      search,
      page_number,
      per_page,
      category,
    });

    if (!response.ok) return;
    setIsMore(response.data.isMore);
    setSubCats([...subCats, ...response.data.data]);
  };

  return [subCats, cats, loading, isMore];
}
