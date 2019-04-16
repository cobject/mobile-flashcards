import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
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
                        <View key={deck.title}>
                            <Text>
                                {deck.title}
                            </Text>
                            <Text>
                                {deck.cards.length}
                            </Text>
                        </View>
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