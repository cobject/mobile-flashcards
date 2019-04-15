import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { styles } from '../utils/styles'

class Quiz extends Component {
    state = {
        isAnswer: false
    }

    handleAnswerOrQuestion = () => {
        this.setState((prevState) => ({
            isAnswer: !prevState.isAnswer
        }))
    }

    handleCorrect = () => {

    }

    handleIncorrect = () => {

    }

    render() {
        const nThQuestion = 1
        const totalQuestion = 10
        const question = 'question?'
        const answer = 'aaaa'

        return (
            <View>
                <Text>{nThQuestion}/{totalQuestion}</Text>
                <Text>{ this.state.isAnswer ? answer: question}</Text>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.handleAnswerOrQuestion}>
                    <Text style={styles.submitBtnText}>{this.state.isAnswer? 'Answer': 'Question'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.handleCorrect}>
                    <Text style={styles.submitBtnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.handleIncorrect}>
                    <Text style={styles.submitBtnText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Quiz