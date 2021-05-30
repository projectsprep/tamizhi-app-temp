import apiClient from "./client";
const endpoint = "/test";

const getProducts = ({ category }) =>
  apiClient.get(endpoint + "/products", { category });

const getPagedProducts = ({ per_page, page_number, category }) =>
  apiClient.get(endpoint + "/products", {
    per_page,
    page_number,
    category,
  });

const searchProducts = ({ per_page, page_number, search, category }) =>
  apiClient.get(endpoint + "/products", {
    per_page,
    page_number,
    search,
    category,
  });

export default { getProducts, getPagedProducts, searchProducts };

// Tamil
