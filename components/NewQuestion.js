import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Platform } from 'react-native'
import { styles } from '../utils/styles'

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

    handleSubmit = () => {
        // TODO
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

export default NewQuestion