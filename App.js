import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='عدد حدس بزن'/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
