import apiClient from "./client";
const endpoint = "/subcategory";

const getAllSubCategories = () => apiClient.get(endpoint);

const getSubCategories = ({ category }) =>
  apiClient.get(endpoint, { category });

const getPagedSubCategories = ({ per_page, page_number, category }) =>
  apiClient.get(endpoint + "/shops", {
    per_page,
    page_number,
    category,
  });

const searchSubCategories = ({ per_page, page_number, search, category }) =>
  apiClient.get(endpoint + "/shops", {
    per_page,
    page_number,
    search,
    category,
  });

export default {
  getAllSubCategories,
  getSubCategories,
  getPagedSubCategories,
  searchSubCategories,
};

// Tamil
