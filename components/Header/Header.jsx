import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Constants/color";
import defaultStyle from "../../Constants/styles_default";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={defaultStyle.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Primary,
    paddingTop: 20,
  },
});

export default Header;
