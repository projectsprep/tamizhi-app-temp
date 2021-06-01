import React, { useState } from "react";

import { StyleSheet, Image, ToastAndroid } from "react-native";
import * as Yup from "yup";

import icons from "../config/icons";
import routes from "../routes/routes";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import AppText from "../components/AppText";
import defaultStyle from "../config/defaultStyles";
import LoadingScreen from "./utils/LoadingScreen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  mobile: Yup.string().required().label("Mobile Number"),
});

function AuthScreen({ navigation }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = async (mobile) => {
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
      <LoadingScreen visible={loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={icons.auth} />
        {error && (
          <AppText style={styles.error}>Something went wrong !</AppText>
        )}
        <AppText style={styles.note}>Please Enter your phone number</AppText>
        <Form
          initialValues={{ mobile: "" }}
          onSubmit={({ mobile }) => handleSubmit(mobile)}
          validationSchema={validationSchema}
        >
          <FormField
            keyboardAppearance={"dark"}
            returnKeyType="go"
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            note="+91"
            width="80%"
            keyboardType="number-pad"
            name="mobile"
            placeholder="Mobile Number"
            containerStyle={styles.mobile}
            onSearch={handleSubmit}
            noError={false}
          />
          <SubmitButton title="Login" style={styles.loginBtn} />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  error: {
    marginVertical: 20,
    alignSelf: "center",
    color: defaultStyle.colors.danger,
  },
  topView: {
    flex: 2,
  },
  login: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 30,
    minHeight: 100,
    minWidth: 100,
    maxHeight: "40%",
    maxWidth: "40%",
    height: "35%",
    width: "35%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  note: {
    alignSelf: "center",
    fontSize: 19,
    paddingVertical: 15,
    fontWeight: "bold",
  },
  desc: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
    marginHorizontal: 25,
    color: "#555",
  },
  mobile: {
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    alignSelf: "center",
  },
  loginBtn: {
    backgroundColor: "#ffb845",
    minWidth: 150,
    maxWidth: 200,
    alignSelf: "center",
    marginBottom: 25,
    marginVertical: "10%",
  },
});

export default AuthScreen;

// Tamil
