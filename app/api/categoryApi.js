import apiClient from "./client";
const endpoint = "/test";

const getCategories = () => apiClient.post(endpoint + "/cats");
const getAllCategories = () => apiClient.post(endpoint + "/cats/all");

export default { getCategories, getAllCategories };

// Tamil
