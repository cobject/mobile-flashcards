import { ADD_DECK, ADD_CARD, GET_DECKS } from '../actions'

export function decks(state = {}, action) {
    switch(action.type) {
        case ADD_DECK:
            return {

            }
        case ADD_CARD:
            return {

            }
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
    }
}