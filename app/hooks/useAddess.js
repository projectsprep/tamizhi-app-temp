import { useState, useEffect } from "react";
import addressApi from "../api/address";

export default function useAddress() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user_id } = { user_id: 52326 };

  useEffect(() => {
    getAddresses();
  }, [isUpdated]);

  const getAddresses = async () => {
    setLoading(true);

    const response = await addressApi.getAllAddress({ user_id });
    if (!response.ok) return setLoading(false);

    setAddresses(response.data);

    setIsUpdated(false);
    setLoading(false);
  };

  return { addresses, loading, setIsUpdated };
}

// Tamil
