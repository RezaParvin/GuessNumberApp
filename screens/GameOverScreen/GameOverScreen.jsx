import React from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import defaultStyles from "../../Constants/styles_default";
import Colors from "../../Constants/color";
import MainButton from "../../components/MainButton/MainButton";

const GameOverScreen = ({ guessCount, selectedNumber, onStartGame }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  gameOver: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  detailGame: {
    marginVertical: 5,
    fontSize: 18,
    textAlign: "center",
  },

  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    marginVertical: 15,
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
