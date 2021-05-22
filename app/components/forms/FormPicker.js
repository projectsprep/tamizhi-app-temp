import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
  style,
  throwError,
  onSelected = (text) => null,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => {
          onSelected(item);
          setFieldValue(name, item);
        }}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        style={style}
      />
      {throwError && (
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </>
  );
}

export default AppFormPicker;

// Tamil
