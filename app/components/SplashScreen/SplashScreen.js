import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: new Animated.Value(0),
        }
    }
    getStore = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => {
            const token = this.getStore('token')
            console.log(token)
            if (token == null) {
                this.props.navigation.replace('LoginScreen')
            }
            this.props.navigation.replace('RegisterScreen')
        })
    }
    render() {
        return (
            <LottieView
                source={require('../../assets/lottie/SplashScreenAnimated.json')}
                autoPlay
                loop
            />
        )
    }
}
