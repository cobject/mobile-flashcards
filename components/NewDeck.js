import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { styles } from '../utils/styles'

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
        // TODO
    }

    render() {
        return (
            <View>
                <Text>What is the title of your new deck</Text>
                <TextInput
                    maxLength={200}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={this.handleChangeText}
                    value={this.state.text} />
                <TouchableOpacity
                    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
                    onPress={this.handleCreateDeck}>
                    <Text style={styles.submitBtnText}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewDeck