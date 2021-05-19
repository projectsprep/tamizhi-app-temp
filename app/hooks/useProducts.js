import { useState, useEffect } from "react";
import categoryApi from "../api/categoryApi";
import productsApi from "../api/productsApi";

export default function useProducts(page_number, search, category) {
  const [products, setProducts] = useState([]);
  const [need, setNeed] = useState(false);
  const [isMore, setIsMore] = useState(true);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const per_page = 5;

  useEffect(() => {
    onQueryChange();
    setNeed(false);
  }, [search, category, need]);

  useEffect(() => {
    if (isMore) onPageChange();
    if (page_number === 1) setNeed(true);
  }, [page_number]);

  const onQueryChange = async () => {
    setLoading(true);

    const catResponse = await categoryApi.getCategories();
    setCats(catResponse.data);

    const response = await productsApi.searchProducts({
      user_id: 1,
      search,
      page_number,
      per_page,
      category,
    });

    if (!response.ok) return setLoading(false);
    setIsMore(response.data.isMore);
    setProducts(response.data.data);

    setLoading(false);
  };

  const onPageChange = async () => {
    const response = await productsApi.searchProducts({
      user_id: 1,
      search,
      page_number,
      per_page,
      category,
    });

    if (!response.ok) return;
    setIsMore(response.data.isMore);
    setProducts([...products, ...response.data.data]);
  };

  return [products, cats, loading, isMore];
}
