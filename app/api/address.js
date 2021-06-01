import apiClient from "./client";
const endpoint = "/test";

const getAllAddress = () => apiClient.get(endpoint + "/address/all");

const getAddress = ({ address_id }) =>
  apiClient.get(endpoint + "/address", { address_id });

const addAddress = ({ address }) =>
  apiClient.post(endpoint + "/address/new", { address });

const updateAddress = ({ address_id, address }) =>
  apiClient.post(endpoint + "/address/update", {
    address_id,
    address,
  });

export default { getAddress, getAllAddress, addAddress, updateAddress };

// Tamil
