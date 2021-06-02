import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "./../auth/storage";

const apiClient = create({
  baseURL: "https://project.tamizhistore.com/api",
  // baseURL: "http://192.168.10.10:3001/api",
  timeout: 3500,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();
  if (!token) return;
  request.headers["Authorization"] = "BEARER " + token;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url, true);
  return data ? { ok: true, data } : response;
};

export default apiClient;

// Tamil
