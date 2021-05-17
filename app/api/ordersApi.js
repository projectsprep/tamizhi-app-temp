import apiClient from "./client";
const endpoint = "/test";

const getOrders = ({ user_id }) =>
  apiClient.post(endpoint + "/posts", { user_id });

const increaseCount = ({ user_id, product_id }) =>
  apiClient.post(endpoint + "/posts/inc", { user_id, product_id });

const decreaseCount = ({ user_id, product_id }) =>
  apiClient.post(endpoint + "/posts/dec", { user_id, product_id });

const remove = ({ user_id, product_id }) =>
  apiClient.post(endpoint + "/posts/remove", { user_id, product_id });

export default { getOrders, increaseCount, decreaseCount, remove };

// Tamil
