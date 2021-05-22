import apiClient from "./client";
const endpoint = "/test";

const getAllAddress = ({ user_id }) =>
  apiClient.post(endpoint + "/address/all", { user_id });

const getAddress = ({ user_id, address_id }) =>
  apiClient.post(endpoint + "/address", { user_id, address_id });

const addAddress = ({ user_id, address }) =>
  apiClient.post(endpoint + "/address/new", { user_id, address });

const updateAddress = ({ user_id, address_id, address }) =>
  apiClient.post(endpoint + "/address/update", {
    user_id,
    address_id,
    address,
  });

export default { getAddress, getAllAddress, addAddress, updateAddress };

// Tamil
