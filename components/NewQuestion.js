import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { styles } from '../utils/styles'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import * as api from '../utils/api'
import { NavigationActions } from 'react-navigation'

class NewQuestion extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleChangeQuestion = (question) => {
        this.setState({
            question
        })
    }

    handleChangeAnswer = (answer) => {
        this.setState({
            answer
        })
    }

    toBack = () => {
        this.props.navigation.dispatch(NavigationActions.back({key: 'NewQuestion'}))
    }

    handleSubmit = () => {
        let card = {
            question: this.state.question,
            answer: this.state.answer
        }
        this.props.dispatch(addCardToDeck(card, this.props.id))
        api.addCardToDeck(card, this.props.id)

        this.props.navigation.goBack()
    }
    render() {
        return (
            <View>
                <TextInput
                    maxLength={200}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={this.handleChangeQuestion}
                    value={this.state.question} />
                <TextInput
                    maxLength={200}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={this.handleChangeAnswer}
                    value={this.state.answer} />
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.handleSubmit}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(decks, { navigation}) {
    return {
        id: navigation.state.params.entryId
    }
}

export default connect(mapStateToProps)(NewQuestion)