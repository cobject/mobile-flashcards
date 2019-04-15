import { AsyncStorage } from 'react-native'
export const DECK_STORAGE_KEY = 'Flashcards:deck'

function setDummyData () {
    let dummyData = {
        React: {
            title: 'React',
            cards: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            cards: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
  
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))
  
    return dummyData
  }

export function _formatResults (results) {
    return results === null
        ? setDummyData()
        : results
}