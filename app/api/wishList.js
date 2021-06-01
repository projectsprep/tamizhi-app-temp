import apiClient from "./client";
const endpoint = "/test";

const save = ({ product_id }) =>
  apiClient.post(endpoint + "/wishlist/save", { product_id });

export default { save };

// Tamil
