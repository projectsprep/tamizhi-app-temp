import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.10.9:3001/api",
  timeout: 10000,
});

export default apiClient;
