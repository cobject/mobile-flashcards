import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks, resetDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { AppLoading} from 'expo'

class DeckList extends Component {
    state = {
        ready: false
    }

    componentDidMount() {
        const { dispatch } = this.props
        
        getDecks().then((results) => {
            dispatch(receiveDecks(results))
        }).then(() => this.setState({ ready: true}))
    }

    handlePress = (id, navigation) => {
        navigation.navigate(
            'Deck',
            { entryId: id }
        )
    }

    render() {
        const { decks } = this.props

        if(this.state.ready === false) {
            return (
                <AppLoading/>
            )
        }

        return (
            <View>
                {decks.map((deck) => {
                    return (
                        <TouchableOpacity
                            key={deck.title}
                            onPress={() => this.handlePress(deck.title, this.props.navigation)}>
                            <Text>
                                {deck.title}
                            </Text>
                            <Text>
                                {deck.cards.length}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks: !decks ? null: Object.keys(decks).map((key) => decks[key])
    }
}


export default connect(mapStateToProps)(DeckList)