import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { styles } from '../utils/styles'
import { connect } from 'react-redux'

class Quiz extends Component {
    state = {
        isAnswer: false,
        currentCard: 0,
        correctCount: 0
    }

    handleAnswerOrQuestion = () => {
        this.setState((prevState) => ({
            isAnswer: !prevState.isAnswer
        }))
    }

    handleCorrect = () => {
        this.setState((prevState) => ({
            isAnswer: false,
            currentCard: ++prevState.currentCard,
            correctCount: ++prevState.correctCount
        }))
    }

    handleIncorrect = () => {
        this.setState((prevState) => ({
            isAnswer: false,
            currentCard: ++prevState.currentCard,
        }))
    }

    handleRestartQuiz = () => {
        this.setState({
            isAnswer: false,
            currentCard: 0,
            correctCount: 0
        })
    }

    handleBackToDeck = () => {
        this.props.navigation.goBack()
    }

    render() {
        const isFinished = this.state.currentCard >= this.props.total ? true: false

        if(isFinished === true) {
            return (
                <View>
                    <Text>Percentage of correct answer is {this.state.correctCount/this.props.total * 100}%</Text>
                    <TouchableOpacity
                        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                        onPress={this.handleRestartQuiz}>
                        <Text style={styles.submitBtnText}>Restart Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                        onPress={this.handleBackToDeck}>
                        <Text style={styles.submitBtnText}>Back to deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        const { question, answer } = this.props.cards[this.state.currentCard]
        return (
            <View>
                <Text>{ this.state.currentCard + 1 }/{ this.props.total }</Text>
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

function mapStateToProps(decks, {navigation}) {
    const { entryId } = navigation.state.params

    return {
        cards: decks[entryId].cards,
        total: decks[entryId].cards.length
    }
}

export default connect(mapStateToProps)(Quiz)