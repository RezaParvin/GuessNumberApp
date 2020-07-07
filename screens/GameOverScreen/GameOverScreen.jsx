import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import defaultStyles from "../../Constants/styles_default";
import Colors from "../../Constants/color";
import MainButton from "../../components/MainButton/MainButton";

const GameOverScreen = ({ guessCount, selectedNumber, onStartGame }) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const changeLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", changeLayout);
    return () => {
      Dimensions.removeEventListener("change", changeLayout);
    };
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.gameOver}>
        <Text style={{ ...defaultStyles.bodyText, ...styles.detailGame }}>
          بازی تمام شده است
        </Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/success.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.txtContainer}>
          <Text style={{ ...defaultStyles.bodyText, ...styles.detailGame }}>
            ما دنبال عدد <Text style={styles.highligth}>{selectedNumber}</Text>{" "}
            بودیم که کامپیوتر در{" "}
            <Text style={styles.highligth}>{guessCount}</Text> حرکت آن را حدس زد
          </Text>
        </View>
        <MainButton onPress={onStartGame}>شروع بازی جدید</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gameOver: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailGame: {
    marginVertical: 5,
    fontSize: Dimensions.get("window").height > 550 ? 18 : 15,
    textAlign: "center",
  },

  imgContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 2,
    borderColor: "black",
    marginVertical: Dimensions.get("window").height > 550 ? 15 : 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highligth: {
    color: Colors.Primary,
  },
  txtContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
});

export default GameOverScreen;
