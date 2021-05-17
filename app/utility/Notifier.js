import { ToastAndroid } from "react-native";

const toastLong = (message) => ToastAndroid.show(message, ToastAndroid.LONG);
const toastShort = (message) => ToastAndroid.show(message, ToastAndroid.SHORT);

export default { toastLong, toastShort };

// Tamil
