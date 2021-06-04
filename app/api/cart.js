import apiClient from "./client";
const endpoint = "/test";

const getCart = () => apiClient.get(endpoint + "/cart");

const increaseCount = ({ product_id }) =>
  apiClient.post(endpoint + "/cart/inc", { product_id });

const decreaseCount = ({ product_id }) =>
  apiClient.post(endpoint + "/cart/dec", { product_id });

const remove = ({ product_id }) =>
  apiClient.post(endpoint + "/cart/remove", { product_id });

export default { getCart, increaseCount, decreaseCount, remove };

// Tamil
