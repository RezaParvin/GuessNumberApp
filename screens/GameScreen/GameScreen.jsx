import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import NumberContainer from "../../components/NumberContainer/NumberContainer";
import Card from "../../components/Card/Card";
import defaultStyles from "../../Constants/styles_default";
import MainButton from "../../components/MainButton/MainButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rnd = Math.round(min - 0.5 + Math.random() * (max - min + 1));

  if (rnd === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rnd;
  }
};

const rendrerGuessItem = (guessLength, renderItem) => {
  return (
    <View style={styles.guessItem}>
      <Text style={defaultStyles.bodyText}>
        #{guessLength - renderItem.index}
      </Text>
      <Text style={defaultStyles.bodyText}>{renderItem.item}</Text>
    </View>
  );
};

const GameScreen = ({ userNumber, onSetGuessRound }) => {
  const initialRandom = generateRandom(1, 99, userNumber);

  const [computerGuess, setComputerGuess] = useState(initialRandom);
  const [guessPast, setGuessPast] = useState([initialRandom.toString()]);

  useEffect(() => {
    if (computerGuess === userNumber) {
      onSetGuessRound(guessPast.length);
    }
  }, [guessPast, userNumber, onSetGuessRound]);

  const currentLow = useRef(1);
  const currentHigh = useRef(99);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "greater" && computerGuess > userNumber) ||
      (direction === "smaller" && computerGuess < userNumber)
    ) {
      Alert.alert("انتخاب غلط", "لطفا درست راهنمایی بکنید!");
      return;
    }

    if (direction === "greater") {
      currentLow.current = computerGuess;
    } else {
      currentHigh.current = computerGuess;
    }
    const newRandom = generateRandom(
      currentLow.current,
      currentHigh.current,
      computerGuess
    );
    setComputerGuess(newRandom);
    //setGuessRound((prevGuessRound) => prevGuessRound + 1);
    setGuessPast((guessPast) => [newRandom.toString(), ...guessPast]);
  };

  return (
    <View style={styles.gameScreen}>
      <Text
        style={{ ...defaultStyles.bodyText, ...styles.computerNumberTitle }}
      >
        کامپیوتر حدس زده
      </Text>
      <NumberContainer>{computerGuess}</NumberContainer>
      <Card style={styles.btnHintContainer}>
        <MainButton
          onPress={() => {
            nextGuessHandler("smaller");
          }}
        >
          <Ionicons name="ios-remove" size={24} color="white" />
        </MainButton>
        <MainButton
          onPress={() => {
            nextGuessHandler("greater");
          }}
        >
          <Ionicons name="ios-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/*<ScrollView contentContainerStyle={styles.list}>
          {guessPast.map((guess, index) =>
            rendrerGuessItem(guess, guessPast.length - index)
          )}
          </ScrollView>*/}
        <FlatList
          data={guessPast}
          keyExtractor={(item) => item}
          renderItem={rendrerGuessItem.bind(this, guessPast.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    alignItems: "center",
  },
  computerNumberTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  btnHintContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  btn: {
    width: "40%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  guessItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
});

export default GameScreen;
