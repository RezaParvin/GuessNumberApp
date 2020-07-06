import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../Constants/color";

const MainButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textBtn}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: Colors.Primary,
    borderRadius: 25,
  },
  textBtn: {
    color: "white",
    fontSize: 18,
    fontFamily: "iranian-sans",
  },
});

export default MainButton;
