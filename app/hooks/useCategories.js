import { useState, useEffect } from "react";
import categoryApi from "../api/categoryApi";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const { user_id } = { user_id: 52326 };

  useEffect(() => {
    getCategories();
  }, [updated]);

  const getCategories = async () => {
    setLoading(true);

    const response = await categoryApi.getCategories();
    if (!response.ok) return setLoading(false);

    setCategories(response.data);
    setLoading(false);
    setUpdated(false);
  };

  return [categories, loading, setUpdated];
}
