import apiClient from "./client";
const endpoint = "/category";

const getCategory = ({ id }) => apiClient.get(endpoint + "/" + id);
const getAllCategories = () => apiClient.get(endpoint);

export default { getCategory, getAllCategories };

// Tamil
