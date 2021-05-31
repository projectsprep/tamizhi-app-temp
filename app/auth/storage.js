import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (ex) {
    console.log("Error stroing token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (ex) {
    console.log("Error getting token", error);
  }
};

const getUser = async () => {
  const token = await getToken();

  // TODO decode the token to get user
  return token
    ? {
        user_id: "1",
        username: "user",
        email: "user@userbase.com",
        mobile: "9876543210",
        iat: 1516239022,
      }
    : null;
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (ex) {
    console.log("Error deleting token", error);
  }
};

const authStorage = { storeToken, getToken, getUser, removeToken };

export default authStorage;

// Tamil
