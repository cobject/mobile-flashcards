import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { styles } from '../utils/styles'
import { connect } from 'react-redux'

class Deck extends Component {

    handleAddCard = () => {
        this.props.navigation.navigate(
            'NewQuestion',
            { entryId: this.props.deck.title }
        )
    }

    handleStartQuiz = (id) => {
        this.props.navigation.navigate(
            'Quiz',
            { entryId: id }            
        )
    }

    render() {
        const { deck } = this.props
        
        return (
        <View style={styles.container}>
            <View style={{flex: 3, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>{deck.title}</Text>
                <Text style={{fontSize: 20}}>{deck.cards.length} cards</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.handleAddCard}>
                    <Text style={styles.submitBtnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={() => this.handleStartQuiz(deck.title)}>
                    <Text style={styles.submitBtnText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

function mapStateToProps(decks, { navigation }) {
    const { entryId } = navigation.state.params

    return {
        deck: decks[entryId]
    }
}

export default connect(mapStateToProps)(Deck)