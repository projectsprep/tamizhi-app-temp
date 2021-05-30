import apiClient from "./client";
const endpoint = "/test";

const getCategories = () => apiClient.get(endpoint + "/cats");
const getAllCategories = () => apiClient.get(endpoint + "/cats/all");

export default { getCategories, getAllCategories };

// Tamil
