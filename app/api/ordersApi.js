import apiClient from "./client";
const endpoint = "/test";

const getOrders = ({ user_id }) =>
  apiClient.post(endpoint + "/orders", { user_id });

const increaseCount = ({ user_id, product_id }) =>
  apiClient.post(endpoint + "/orders/inc", { user_id, product_id });

const decreaseCount = ({ user_id, product_id }) =>
  apiClient.post(endpoint + "/orders/dec", { user_id, product_id });

const remove = ({ user_id, product_id }) =>
  apiClient.post(endpoint + "/orders/remove", { user_id, product_id });

export default { getOrders, increaseCount, decreaseCount, remove };

// Tamil
