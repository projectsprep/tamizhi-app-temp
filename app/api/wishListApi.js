import apiClient from "./client";
const endpoint = "/test";

const save = ({ user_id, product_id }) =>
  apiClient.post(endpoint + "/wishlist/save", { user_id, product_id });

export default { save };

// Tamil
