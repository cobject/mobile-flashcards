import { ADD_DECK, ADD_CARD, RECEIVE_DECKS } from '../actions'

function decks(state = {}, action) {
    switch(action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.deck]: {
                    cards: [],
                    title: action.deck
                }
            }
        case ADD_CARD:
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    cards: [...state[action.deck].cards, action.card]
                }
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
    }
}

export default decks