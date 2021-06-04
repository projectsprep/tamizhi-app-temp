import apiClient from "./client";
const endpoint = "";

const getProducts = ({ category }) =>
  apiClient.get("/getfooditems/random", { category, rows: 10 });

const getProductsOfShops = ({ subCategory }) =>
  apiClient.get("/getfooditems/random", { subCategory, rows: 10 });

const getPagedProducts = ({ per_page, page_number, category }) =>
  apiClient.get(endpoint + "/products", {
    per_page,
    page_number,
    category,
  });

const searchProducts = ({ per_page, page_number, search, category }) =>
  apiClient.get("/getsearchproduct", {
    per_page,
    page_number,
    query: search,
    category,
  });

export default {
  getProducts,
  getProductsOfShops,
  getPagedProducts,
  searchProducts,
};

// Tamil
