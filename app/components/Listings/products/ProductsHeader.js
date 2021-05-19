import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import defaultStyles from "../../../config/defaultStyles";

import { Form, FormField, FormPicker, SubmitButton } from "../../forms";
import CategoryPickerItem from "./../../CategoryPickerItem";

const validationSchema = Yup.object().shape({
  search: Yup.string().label("Search term"),
  category: Yup.object().nullable().label("Category"),
});

function ProductsHeader({ navigation, categories, onSubmit, current }) {
  return (
    <View style={styles.container}>
      <Form
        initialValues={{ search: "" }}
        onSubmit={({ search, category }) => onSubmit({ search, category })}
        validationSchema={validationSchema}
      >
        <FormField
          keyboardAppearance={"dark"}
          autoCapitalize="none"
          autoCorrect={true}
          icon="home"
          name="search"
          placeholder="Search for products and shops"
          containerStyle={styles.field}
        />

        <View style={styles.searchBox}>
          <FormPicker
            name="category"
            numberOfColumns={3}
            placeholder={current.category}
            style={styles.picker}
            width={"40%"}
            items={categories}
            throwError={false}
            PickerItemComponent={CategoryPickerItem}
          />

          <SubmitButton title="Search" style={styles.button} />
        </View>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.white,
  },

  searchBox: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  picker: {
    borderRadius: 10,
  },

  button: {
    width: "40%",
  },
});

export default ProductsHeader;

// Tamil
