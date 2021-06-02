import apiClient from "./client";
const endpoint = "/test";

const getBanners = () => apiClient.get("/banner");

const getCategories = ({ rows }) => apiClient.get("/category/random", { rows });

const getSubCategories = ({ rows }) =>
  apiClient.get("/subcategory/random", { rows });

const getFoodItems = ({ rows }) =>
  apiClient.get("/getfooditems/random", { rows });

export default { getBanners, getCategories, getSubCategories, getFoodItems };

// Tamil
