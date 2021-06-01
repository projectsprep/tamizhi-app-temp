import apiClient from "./client";
const endpoint = "/subcategory";

const getAllSubCategories = () => apiClient.get(endpoint);

const getSubCategories = ({ category }) =>
  apiClient.get(endpoint + "/shops", { category });

const getPagedSubCategories = ({ per_page, page_number, category }) =>
  apiClient.get(endpoint + "/shops", {
    per_page,
    page_number,
    category,
  });

const searchCategories = ({ per_page, page_number, search, category }) =>
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
  searchCategories,
};

// Tamil
