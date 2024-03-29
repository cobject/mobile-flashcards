import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import { styles } from '../utils/styles'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
    state = {
        text: ''
    }

    handleChangeText = (text) => {
        this.setState({
            text
        })
    }

    handleCreateDeck = () => {
        this.props.dispatch(addDeck(this.state.text))
        saveDeckTitle(this.state.text)
            .catch((error) => {
                console.log(error)
            })
        this.setState({
            text: ''
        })
        this.toHome()
    }

    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.back({key: 'NewDeck'}))
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={{fontSize: 20}}>What is the title of your new deck</Text>
                <TextInput
                    maxLength={200}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 5}}
                    onChangeText={this.handleChangeText}
                    value={this.state.text} />
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.handleCreateDeck}>
                    <Text style={styles.submitBtnText}>Create Deck</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default connect()(NewDeck)