import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../Constants/color";

const MainButton = ({ children, onPress }) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.btnContainer}>
      <ButtonComponent onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.textBtn}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
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
  btnContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
});

export default MainButton;
