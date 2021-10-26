import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default class Textinput extends Component {
    render() {
        const {
            placeholder,
            value,
            ChangeText,
            type = 'default',
            password,
            Blur,
            style,
            placeholderTextColor,
        } = this.props
        return (
            <TextInput
                style={style}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                value={value}
                keyboardType={type}
                onChangeText={ChangeText}
                onBlur={Blur}
                secureTextEntry={password}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
