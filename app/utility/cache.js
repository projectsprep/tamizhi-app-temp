import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = { value, timestamp: Date.now() };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (ex) {
    console.error(ex);
  }
};

const get = async (key, isVolatile) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isVolatile) return clearCache(key, item);

    return item.value;
  } catch (ex) {
    console.error(ex);
  }
};

const clearCache = async (key, item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const isExpired = now.diff(storedTime, "minutes") > expiryInMinutes;

  if (isExpired) {
    await AsyncStorage.removeItem(prefix + key);
    return null;
  }
  return null;
};

export default { store, get };

// Tamil
