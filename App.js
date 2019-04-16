import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
// import Deck from './components/Deck'
// import NewDeck from './components/NewDeck'
// import NewQuestion from './components/NewQuestion'
// import Quiz from './components/Quiz'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <DeckList />
        </View>
      </Provider>
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
