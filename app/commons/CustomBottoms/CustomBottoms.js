import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class CustomBottoms extends Component {
    render() {
        const { text, btnstyle, textstyle } = this.props
        return (
            <TouchableOpacity style={btnstyle}>
                <Text style={textstyle}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
