import apiClient from "./client";
const endpoint = "/test";

const login = ({ mobile }) => apiClient.post(endpoint + "/auth", { mobile });
const verify = ({ otp }) => apiClient.post(endpoint + "/verify", { otp });

export default { login, verify };

// Tamil
