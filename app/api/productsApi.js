import apiClient from "./client";
const endpoint = "/test";

const getProducts = ({ user_id, category }) =>
  apiClient.post(endpoint + "/products", { user_id, category });

const getPagedProducts = ({ user_id, per_page, page_number, category }) =>
  apiClient.post(endpoint + "/products", {
    user_id,
    per_page,
    page_number,
    category,
  });

const searchProducts = ({ user_id, per_page, page_number, search, category }) =>
  apiClient.post(endpoint + "/products", {
    user_id,
    per_page,
    page_number,
    search,
    category,
  });

export default { getProducts, getPagedProducts, searchProducts };

// Tamil
