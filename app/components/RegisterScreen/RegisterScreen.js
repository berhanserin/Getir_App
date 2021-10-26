import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class RegisterScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'black' }}>RegisterScreen Component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
