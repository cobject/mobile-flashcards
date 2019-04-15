export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const GET_DECKS = 'GET_DECKS'

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCardToDeck(card, deck) {
    return {
        type: ADD_CARD,
        card,
        deck
    }
}

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}