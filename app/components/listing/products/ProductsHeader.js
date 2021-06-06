import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import defaultStyles from "../../../config/defaultStyles";

import { Form, FormField, FormPicker } from "../../forms";
import CategoryPickerItem from "../../CategoryPickerItem";

const validationSchema = Yup.object().shape({
  search: Yup.string().label("Search term"),
  category: Yup.object().nullable().label("Category"),
});

function ProductsHeader({
  categories,
  onSubmit,
  current,
  onSearch,
  setCategory,
}) {
  return (
    <View style={styles.container}>
      <Form
        initialValues={{}}
        onSubmit={({ search, category }) => onSubmit({ search, category })}
        validationSchema={validationSchema}
      >
        <FormField
          returnKeyType="search"
          keyboardAppearance={"dark"}
          autoCapitalize="none"
          autoCorrect={true}
          icon="home-search"
          name="search"
          placeholder="Search for products and shops"
          containerStyle={styles.field}
          onSearch={onSearch}
          defaultValue={current.search}
        />

        <FormPicker
          onSelected={(item) => setCategory(item.catname)}
          name="category"
          numberOfColumns={3}
          placeholder={current.category}
          style={styles.picker}
          items={categories}
          throwError={false}
          PickerItemComponent={CategoryPickerItem}
        />
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F8",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  picker: {
    height: 40,
    paddingVertical: "2%",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center"
  },

  field: {
    width: "90%",
    alignSelf: "center",
    height: 50,
    marginTop: 15
  }
});

export default ProductsHeader;

// Tamil
