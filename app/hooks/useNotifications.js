import * as Notifications from "expo-notifications";
import { useRef, useEffect } from "react";
import { Platform } from "react-native";
import expoTokens from "../api/expoTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

function useNotifications(notificationListener) {
  const notificationResponseListener = useRef();

  const regiserForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoTokens.register(token.data);

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      if (notificationListener)
        notificationResponseListener.current =
          Notifications.addNotificationResponseReceivedListener(
            notificationListener
          );
    } catch (ex) {
      console.log("Error getting push token", ex);
    }
  };

  useEffect(() => {
    regiserForPushNotifications();

    return () => {
      Notifications.removeNotificationSubscription(
        notificationResponseListener.current
      );
    };
  }, []);
  return;
}

export default useNotifications;
