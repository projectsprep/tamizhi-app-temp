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
});

function EditUserDetails({ navigation, route }) {
  const details = route.params;
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
          defaultValue={details.name}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="phone"
          keyboardType="number-pad"
          name="mobile"
          placeholder="Contact Number"
          textContentType="telephoneNumber"
          defaultValue={details.mobile}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          defaultValue={details.email}
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
