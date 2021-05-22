import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import addressApi from "../api/addressApi";
import Notifier from "../utility/Notifier";
import routes from "../routes/routes";

const validationSchema = Yup.object().shape({
  label: Yup.string().required().label("label"),
  doorNo: Yup.string().required().label("Door no"),
  addressLine1: Yup.string().required().label("Address line 1"),
  addressLine2: Yup.string().required().label("Address line 2"),
  pincode: Yup.number().required().label("Pin code"),
  location: Yup.number().required().label("lat lang"),
});

function AddressEditScreen({ navigation, route }) {
  const { action, user_id, values } = route.params;

  const initialValues = values
    ? values
    : {
        label: "",
        doorNo: "",
        addressLine1: "",
        addressLine2: "",
        pincode: "",
      };

  const update = async ({
    label,
    doorNo,
    addressLine1,
    addressLine2,
    pincode,
  }) => {
    const address = { label, doorNo, addressLine1, addressLine2, pincode };
    console.log("app");
    if (action === "add") {
      console.log("action: ", "adding");
      const response = await addressApi.addAddress({ user_id, address });
      if (!response.ok) return Notifier.toastShort("Something went wrong !");
      navigation.replace(routes.ADDRESSES, {
        action,
        address_id: response.data.id,
        address,
      });
    } else if (action === "update") {
      console.log("action: ", "updating");
      const response = await addressApi.updateAddress({
        action,
        address_id: initialValues.id,
        address,
      });
      if (!response.ok) return Notifier.toastShort("Something went wrong !");
      navigation.replace(routes.ADDRESSES, {
        action: "update",
        address_id: initialValues.id,
        address,
      });
    }
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={initialValues}
        onSubmit={({ label, doorNo, addressLine1, addressLine2, pincode }) =>
          update({ label, doorNo, addressLine1, addressLine2, pincode })
        }
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="label"
          placeholder="Label"
          defaultValue={initialValues.label}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="door"
          name="doorNo"
          placeholder="Door No."
          defaultValue={initialValues.doorNo}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="google-street-view"
          name="addressLine1"
          placeholder="Address Line 1"
          defaultValue={initialValues.addressLine1}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="google-street-view"
          name="addressLine2"
          placeholder="Address Line 2"
          defaultValue={initialValues.addressLine2}
        />
        <FormField
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          icon="pin"
          name="pincode"
          placeholder="Pincode"
          defaultValue={initialValues.pincode}
        />
        <SubmitButton title={action} style={styles.submit} />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { width: "95%", alignSelf: "center" },
  submit: {
    marginVertical: 30,
    width: "50%",
    alignSelf: "center",
  },
});

export default AddressEditScreen;
