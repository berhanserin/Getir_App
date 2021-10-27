import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class CustomBottoms extends Component {
    render() {
        const {
            text,
            width,
            borderColor,
            borderRadius,
            borderWidth,
            alignItems,
            textColor,
            onPress,
            height,
            justifyContent,
        } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    height,
                    width,
                    borderColor,
                    borderRadius,
                    borderWidth,
                    alignItems,
                    justifyContent,
                }}
            >
                <Text style={{ color: textColor }}>{text}</Text>
            </TouchableOpacity>
        )
    }
}
CustomBottoms.propTypes = {
    text: PropTypes.string.isRequired,
}
