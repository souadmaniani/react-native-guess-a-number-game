import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return (Font.loadAsync({
    'open-sans-regular': require('./assets/font/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/font/OpenSans-Bold.ttf')
  }));
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoad, setDataLoad] = useState(false);

  if (!dataLoad) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoad(true)}
      onerror={(err) => { console.log(err) }}
    />
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const ConfigureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  
  if (userNumber && guessRounds === 0) {
    content = <GameScreen userChoice={userNumber}
      onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen guessRounds={guessRounds}
      userNumber={userNumber} onRestart={ConfigureNewGame} />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
