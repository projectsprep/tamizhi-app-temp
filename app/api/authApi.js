import apiClient from "./client";
const endpoint = "/auth";

const login = ({ mobile }) => apiClient.post(endpoint, { mobile });
const verify = ({ otp }) => apiClient.post(endpoint + "/verify", { otp });

export default { login, verify };
