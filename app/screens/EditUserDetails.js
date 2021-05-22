import React from "react";

import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import defaultStyles from "../config/defaultStyles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  mobile: Yup.string().required().email().label("Moblie Number"),
  address: Yup.string().required().min(4).label("Address"),
});

function EditUserDetails({ navigation }) {
  const handleSubmit = () => null;
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", address: "" }}
        onSubmit={({ name, email, address }) =>
          handleSubmit({ name, email, address })
        }
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="home"
          name="address"
          placeholder="Address"
          secureTextEntry
          textContentType="address"
        />
        <SubmitButton title="Update" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  note: {
    color: "grey",
  },
  login: {
    color: defaultStyles.colors.primaryDark,
  },
});

export default EditUserDetails;

// Tamil
