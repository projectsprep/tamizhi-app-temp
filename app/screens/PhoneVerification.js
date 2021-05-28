import React, { useState, useContext } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, SubmitButton } from "../components/forms";
import authApi from "../api/authApi";
import AppText from "./../components/AppText";
import LoadingView from "./utils/LoadingScreen";
import defaultStyle from "../config/defaultStyles";
import FormOtpInput from "../components/forms/FormOtpInput";
import useAuth from "./../auth/useAuth";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .max(5, "invalid OTP")
    .min(5, "invalid OTP")
    .required()
    .label("OTP"),
});

function PhoneVerification({ route }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { authenticate } = useAuth();

  const handleSubmit = async (otp) => {
    setLoading(true);

    const response = await authApi.verify({ otp });

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
    authenticate(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsInVzZXJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckB1c2VyYmFzZS5jb20iLCJtb2JpbGUiOiI5ODc2NTQzMjEwIiwiaWF0IjoxNTE2MjM5MDIyfQ.cTlY7ZImqr7MtuhvWH8fF_2HIzIgVIwEXoZctwm9wik"
    );
  };

  return (
    <>
      <Screen style={styles.container}>
        <View style={styles.info}>
          <AppText>Enter OTP</AppText>
          <AppText>Sent to the +91 {route.params.mobile}</AppText>
        </View>
        <Form
          initialValues={{ otp: "" }}
          onSubmit={({ otp }) => handleSubmit(otp)}
          validationSchema={validationSchema}
        >
          <FormOtpInput
            onSearch={handleSubmit}
            autoFocus
            name="otp"
            placeholder="*"
            textInputStyle={styles.otpText}
            secureTextEntry
          />
          <AppText>{error ? "\n\nSomething went wrong ! \n" : "\n"}</AppText>
          <SubmitButton title="Verify" />
        </Form>
      </Screen>
      <LoadingView
        visible={loading}
        backgroundColor={defaultStyle.colors.white}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    marginBottom: 40,
    alignItems: "center",
  },

  otpText: {
    color: defaultStyle.colors.black,
    borderWidth: 1,
    borderRadius: 10,
  },

  register: {
    color: defaultStyle.colors.primaryDark,
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default PhoneVerification;

// Tamil
