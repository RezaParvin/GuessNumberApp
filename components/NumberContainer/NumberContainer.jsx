import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../Constants/color";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    width: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.Second,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 15,
  },
  number: {
    fontSize: 25,
    color: Colors.Second,
  },
});

export default NumberContainer;
