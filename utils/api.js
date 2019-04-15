import { AsyncStorage } from 'react-native'
import { _formatResults, DECK_STORAGE_KEY } from './_deck'

export function resetDecks() {
    AsyncStorage.clear(DECK_STORAGE_KEY)
}

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(_formatResults)
}

export function getDeck(id) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => JSON.parse(results)[id])
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            cards: []
        }
    }))
}

export function addCardToDeck(card, deck) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const decks = JSON.parse(results)
            decks[deck].cards.push(card)
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
        })
}