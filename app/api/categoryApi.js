import apiClient from "./client";
const endpoint = "/test";

const getCategories = () => apiClient.post(endpoint + "/cats");

export default { getCategories };

// Tamil
