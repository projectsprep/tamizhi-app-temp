import client from "./client";

const register = (expoToken) => client.post("/expoToken", { token: expoToken });

export default { register };
