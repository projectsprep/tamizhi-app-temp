import React, { useRef } from "react";

import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import style from "../config/defaultStyles";
import AppText from "./AppText";

function AppTextInput({
  icon,
  width = "100%",
  containerStyle,
  note,
  isFocused = true,
  onSearch,
  ...otherProps
}) {
  const inputRef = useRef();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        inputRef.current.isFocused()
          ? inputRef.current.blur()
          : inputRef.current.focus();
      }}
    >
      <View style={[styles.container, { width, ...containerStyle }]}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={style.colors.medium}
            style={styles.icon}
          />
        )}
        {note && <AppText style={styles.note}>{note}</AppText>}
        <TextInput
          ref={inputRef}
          placeholderTextColor={style.colors.medium}
          // style={style.text}
          onSubmitEditing={onSearch}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    backgroundColor: "#F5F5Fb",
    borderRadius: 7,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  note: {
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;

// Tamil
