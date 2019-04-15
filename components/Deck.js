import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { styles } from '../utils/styles'

class Deck extends Component {

    handleAddCard = () => {

    }

    handleStartQuiz = () => {

    }

    render() {
        const title = 'new deck'
        const count = 10

        return (
        <View>
            <Text>{title}</Text>
            <Text>{count} cards</Text>
            <TouchableOpacity
                style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                onPress={this.handleAddCard}>
                <Text style={styles.submitBtnText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                onPress={this.handleStartQuiz}>
                <Text style={styles.submitBtnText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export default Deck