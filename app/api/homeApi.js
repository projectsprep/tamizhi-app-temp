import apiClient from "./client";
const endpoint = "/test";

const getBanners = () => apiClient.get(endpoint + "/home/banners");
const getCategories = () => apiClient.get(endpoint + "/home/categories");
const getFoodItems = () => apiClient.get(endpoint + "/home/food");

export default { getBanners, getCategories, getFoodItems };

// Tamil
