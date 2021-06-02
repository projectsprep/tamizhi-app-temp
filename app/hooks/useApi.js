import _ from "lodash";
import { useState, useEffect } from "react";

export default function useApi(apiFunc, params) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    setLoading(true);

    const response = await apiFunc(params);
    if (!response.ok) return setLoading(false);
    setItems(response.data);

    setLoading(false);
  };

  useEffect(() => {
    getItems();
    getItems();
  }, []);

  return { items, loading, refresh: getItems };
}

// Tamil
