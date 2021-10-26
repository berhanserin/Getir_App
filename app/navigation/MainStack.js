import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from 'components/SplashScreen/'
import LoginScreen from 'components/LoginScreen/'
import RegisterScreen from 'components/RegisterScreen/'

export default class MainStack extends Component {
    render() {
        const Stack = createNativeStackNavigator()
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={'SplashScreen'}
                    screenOptions={{
                        headerTitleAlign: 'center',
                        title: 'getir',
                        headerTintColor: 'yellow',
                        headerTitleStyle: { fontWeight: '800', fontSize: 35 },
                        headerShadowVisible: false,
                        headerStyle: { backgroundColor: '#5056F1' },
                    }}
                >
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen
                        name="RegisterScreen"
                        component={RegisterScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
