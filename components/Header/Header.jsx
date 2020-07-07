import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../../Constants/color";
import defaultStyle from "../../Constants/styles_default";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={{ ...defaultStyle.headerText, ...styles.title }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  headerIos: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.Primary,
  },
  title: {
    color: Platform.OS === "ios" ? Colors.Primary : "white",
  },
});

export default Header;
