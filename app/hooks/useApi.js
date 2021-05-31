import _ from "lodash";
import { useState, useEffect } from "react";

export default function useApi(apiFunc) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    setLoading(true);
    const response = await apiFunc();
    if (response.ok) setItems(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getItems();
  }, []);

  return { items, loading, refresh: getItems };
}

// Tamil
