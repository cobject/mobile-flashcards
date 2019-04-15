import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList/>
        <Deck/>
        <NewDeck/>
        <NewQuestion/>
        <Quiz/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
