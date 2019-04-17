import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getDecks, resetDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { AppLoading} from 'expo'
import { white } from '../utils/colors'

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
            <ScrollView>
                {decks.map((deck) => {
                    return (
                        <TouchableOpacity style={[styles.item, {marginBottom: 5}]}
                            key={deck.title}
                            onPress={() => this.handlePress(deck.title, this.props.navigation)}>
                            <Text style={{fontSize: 20}}>
                                {deck.title}
                            </Text>
                            <Text style={{fontSize: 16}}>
                                {deck.cards.length} cards
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks: !decks ? null: Object.keys(decks).map((key) => decks[key])
    }
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: white,
      borderRadius: Platform.OS === 'ios' ? 16 : 2,
    //   borderBottomWidth: 1,
      padding: 20,
      marginLeft: 10,
      marginRight: 10,
    //   marginTop: 17,
      justifyContent: 'center',
      shadowRadius: 3,
      shadowOpacity: 0.8,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
    }
  })

export default connect(mapStateToProps)(DeckList)