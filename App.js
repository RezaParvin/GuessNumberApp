import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header/Header";
import StartGameScreen from "./screens/StartGameScreen/StartGameScreen";
import GameScreen from "./screens/GameScreen/GameScreen";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [guessCount, setGuessCount] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      IranianSans: require("./assets/fonts/IranianSans.ttf"),
      "iranian-sans": require("./assets/fonts/IranianSans.ttf"),
    });
    setDataLoaded(true);
  };

  useEffect(() => {
    getFonts();
  }, []);

  const onUserSelectedNumber = (userNumber) => {
    setSelectedNumber(userNumber);
  };

  const onSetGuessCountHandler = (count) => {
    setGuessCount(count);
  };

  const onStartNewGameHandler = () => {
    setGuessCount(0);
    setSelectedNumber(null);
  };

  let screen = <StartGameScreen userSelectNumber={onUserSelectedNumber} />;

  if (selectedNumber && guessCount <= 0) {
    screen = (
      <GameScreen
        userNumber={selectedNumber}
        onSetGuessRound={onSetGuessCountHandler}
      />
    );
  } else if (guessCount > 0) {
    screen = (
      <GameOverScreen
        guessCount={guessCount}
        selectedNumber={selectedNumber}
        onStartGame={onStartNewGameHandler}
      />
    );
  }

  if (dataLoaded) {
    return (
      <View style={styles.screen}>
        <Header title="عدد حدس بزن" />
        {screen}
      </View>
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
