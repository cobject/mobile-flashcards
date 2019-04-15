import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckList extends Component {
    state = {
        decks: {
            aaa: {
                id: 'aaa',
                title: 'new deck',
                cards: [
                    {
                        question: 'qqq',
                        answer: 'aaa'
                    }
                ]
            },
            bbb: {
                id: 'bbb',
                title: 'new deck2',
                cards: [
                    {
                        question: 'qqq',
                        answer: 'aaa'
                    }
                ]
            }
        }
    }

    render() {
        return (
            <View>
                {Object.keys(this.state.decks).map((key) => {
                    return (
                        <View key={key}>
                            <Text>
                                {this.state.decks[key].title}
                            </Text>
                            <Text>
                                {this.state.decks[key].cards.length}
                            </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}

export default DeckList