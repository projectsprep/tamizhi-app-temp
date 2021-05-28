import React from "react";
import { useFormikContext } from "formik";
import OtpInput from "react-native-otp-textinput";

import ErrorMessage from "./ErrorMessage";
import defaultStyles from "../../config/defaultStyles";

function FormOptInput({ name, width, textInputStyle, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <OtpInput
        inputCount={5}
        handleTextChange={(text) => setFieldValue(name, text)}
        values={values[name]}
        tintColor={defaultStyles.colors.primaryDark}
        textInputStyle={textInputStyle}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormOptInput;

// Tamil
