import apiClient from "./client";
const endpoint = "/test";

const getCart = () => apiClient.get(endpoint + "/orders");

const increaseCount = ({ product_id }) =>
  apiClient.post(endpoint + "/orders/inc", { product_id });

const decreaseCount = ({ product_id }) =>
  apiClient.post(endpoint + "/orders/dec", { product_id });

const remove = ({ product_id }) =>
  apiClient.post(endpoint + "/orders/remove", { product_id });

export default { getCart, increaseCount, decreaseCount, remove };

// Tamil
