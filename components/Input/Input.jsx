import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ style, ...otherProps }) => {
  return <TextInput {...otherProps} style={{ ...styles.input, ...style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});

export default Input;
