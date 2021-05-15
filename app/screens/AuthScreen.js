import React, { useState } from "react";

import LoadingScreen from "../components/utils/LoadingScreen";

import { StyleSheet, Image, ToastAndroid } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import routes from "../routes/routes";
import authApi from "../api/authApi";
import AppText from "../components/AppText";
import defaultStyle from "../config/defaultStyles";
import icons from "../utils/icons";

const validationSchema = Yup.object().shape({
  mobile: Yup.string().required().label("Mobile Number"),
});

function AuthScreen({ navigation }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = async ({ mobile }) => {
    setLoading(true);

    const response = await authApi.login({ mobile });

    if (!response.ok) {
      ToastAndroid.show(
        `${response.problem}: Something Went Wrong !`,
        ToastAndroid.LONG
      );

      setError(true);
      return setLoading(false);
    }

    setError(false);
    setLoading(false);

    navigation.navigate(routes.OTP_VERIFICATION, { mobile });
  };

  return (
    <>
      <Screen style={styles.container}>
        <Image style={styles.logo} source={icons.logo} />
        {error && <AppText>Something went wrong !</AppText>}
        <AppText style={styles.note}>Please Enter your phone number</AppText>
        <Form
          initialValues={{ mobile: "" }}
          onSubmit={({ mobile }) => handleSubmit({ mobile })}
          validationSchema={validationSchema}
        >
          <FormField
            keyboardAppearance={"dark"}
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            note="+91"
            width="100%"
            keyboardType="number-pad"
            name="mobile"
            placeholder="Mobile Number"
            containerStyle={styles.mobile}
          />
          <SubmitButton title="Login" />
        </Form>
      </Screen>
      <LoadingScreen visible={loading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  mobile: {
    marginTop: 50,
    marginBottom: 10,
  },

  note: { color: "grey", marginTop: 50 },

  register: { color: defaultStyle.colors.primaryDark },

  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
  },
});

export default AuthScreen;
