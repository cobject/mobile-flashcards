import { ADD_DECK, ADD_CARD, RECEIVE_DECKS } from '../actions'

function decks(state = {}, action) {
    switch(action.type) {
        case ADD_DECK:
            return {

            }
        case ADD_CARD:
            return {

            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
    }
}

export default decks