import { useState, useEffect } from "react";
import testApi from "../api/testApi";

export default function useApiTest() {
  const [isAlive, setIsAlive] = useState();

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const response = await testApi.test();
    if (!response.ok || response.status !== 200) return setIsAlive(false);
    if (response.ok) return setIsAlive(true);
  };

  return { isAlive, refresh: test };
}
