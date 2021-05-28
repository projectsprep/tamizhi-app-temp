import apiClient from "./client";
const endpoint = "/test";

const getSubCategories = ({ user_id, category }) =>
  apiClient.post(endpoint + "/shops", { user_id, category });

const getPagedSubCategories = ({ user_id, per_page, page_number, category }) =>
  apiClient.post(endpoint + "/shops", {
    user_id,
    per_page,
    page_number,
    category,
  });

const searchCategories = ({
  user_id,
  per_page,
  page_number,
  search,
  category,
}) =>
  apiClient.post(endpoint + "/shops", {
    user_id,
    per_page,
    page_number,
    search,
    category,
  });

export default { getSubCategories, getPagedSubCategories, searchCategories };

// Tamil
