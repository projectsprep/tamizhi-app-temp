import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({
  name,
  width,
  style,
  onSearch = () => null,
  ...otherProps
}) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        values={values[name]}
        width={width}
        onSearch={() => onSearch(values[name])}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

// Tamil
