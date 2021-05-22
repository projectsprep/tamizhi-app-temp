import { useState, useEffect } from "react";
import categoryApi from "../api/categoryApi";

export default function useOrders() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user_id } = { user_id: 52326 };

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    setLoading(true);

    const response = await categoryApi.getCategories();
    if (!response.ok) return setLoading(false);

    setCategories(response.data);
    setLoading(false);
  };

  return [categories, loading];
}
