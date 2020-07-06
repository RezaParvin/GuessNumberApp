import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../../components/Card/Card";
import Colors from "../../Constants/color.js";
import Input from "../../components/Input/Input";
import NumberContainer from "../../components/NumberContainer/NumberContainer";
import defaultStyles from "../../Constants/styles_default";
import MainButton from "../../components/MainButton/MainButton";

const StartGameScreen = ({ userSelectNumber }) => {
  const [enteredNumber, setEntredNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const onChangeTextHandler = (text) => {
    setEntredNumber(text.replace(/[^0-9]/g, ""));
  };

  const onResetingHandler = () => {
    setEntredNumber("");
    setConfirm(false);
  };

  const onConfirmHandler = () => {
    //convert entered Number to Number
    const choosedNumber = parseInt(enteredNumber);

    //check validitaion Number if user Paste To InputText
    if (isNaN(choosedNumber) || choosedNumber <= 0 || choosedNumber > 99) {
      Alert.alert("خطایی رخ داده", "شماره باید بین 1 تا 99 باشد.", [
        { text: "باشه", style: "destructive", onPress: onResetingHandler },
      ]);
      return;
    }

    //batch updating state
    setConfirm(true);
    setEntredNumber("");
    setSelectedNumber(choosedNumber);
    Keyboard.dismiss();
  };

  let renderChoosedNumber = null;
  if (confirm) {
    renderChoosedNumber = (
      <Card style={styles.numberContainer}>
        <Text style={defaultStyles.bodyText}>شماره ای که انتخاب کردید</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          onPress={() => {
            userSelectNumber(selectedNumber);
          }}
        >
          شروع بازی
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={{ ...defaultStyles.bodyText, ...styles.screenTitle }}>
          آغاز بازی جدید
        </Text>
        <Card style={styles.inputContainer}>
          <Text style={{ ...defaultStyles.bodyText, ...styles.inputTitle }}>
            یک شماره انتخاب کنید
          </Text>
          <Input
            style={styles.inputNumber}
            blurOnSubmit
            maxLength={2}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={onChangeTextHandler}
          />
          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="تایید"
                color={Colors.Primary}
                onPress={onConfirmHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="تنظیم دوباره"
                color={Colors.Second}
                onPress={onResetingHandler}
              />
            </View>
          </View>
        </Card>
        {renderChoosedNumber}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  screenTitle: {
    marginBottom: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  inputTitle: {
    fontSize: 16,
  },
  inputNumber: {
    width: 50,
    textAlign: "center",
    fontSize: 18,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
  },
  button: {
    width: "40%",
  },
  numberContainer: {
    marginVertical: 30,
    alignItems: "center",
  },
});

export default StartGameScreen;
