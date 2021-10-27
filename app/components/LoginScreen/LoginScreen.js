import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Textinput from 'commons/Textinput/'
import CustomBottoms from 'commons/CustomBottoms/'
import * as yup from 'yup'
import { Formik } from 'formik'

export default class LoginScreen extends Component {
    width = Dimensions.get('screen').width
    height = Dimensions.get('screen').height
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.loginArea, { height: this.height * 0.5 }]}>
                    <View
                        style={{
                            marginHorizontal: '8%',
                            marginVertical: '15%',
                        }}
                    >
                        <Formik
                            validationSchema={yup.object().shape({
                                uname: yup
                                    .string()
                                    .min(
                                        5,
                                        ({ min }) =>
                                            `Minimum ${min} Harf Giriniz.`
                                    )
                                    .required('Kullanıcı Adı Zorunlu'),
                                password: yup
                                    .string()
                                    .min(
                                        5,
                                        ({ min }) =>
                                            `Minimim ${min} Harf Giriniz.`
                                    )
                                    .required('Şifre Zorunlu'),
                            })}
                            initialValues={{
                                uname: '',
                                password: '',
                            }}
                            onSubmit={async (values, { resetForm }) => {}}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                resetForm,
                                isValid,
                            }) => (
                                <View>
                                    <View
                                        style={{
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Textinput
                                            placeholder="Kullanıcı Adı"
                                            ChangeText={handleChange('uname')}
                                            Blur={handleBlur('uname')}
                                            placeholderTextColor="#5056F1"
                                            password={false}
                                            style={[
                                                styles.textInput,
                                                { width: this.width * 0.8 },
                                            ]}
                                        />
                                        {errors.uname && (
                                            <Text style={styles.errors}>
                                                {errors.uname}
                                            </Text>
                                        )}
                                    </View>

                                    <View
                                        style={{
                                            marginTop: 5,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Textinput
                                            placeholder="Şifre"
                                            ChangeText={handleChange(
                                                'password'
                                            )}
                                            Blur={handleBlur('password')}
                                            placeholderTextColor="#5056F1"
                                            password={true}
                                            style={[
                                                styles.textInput,
                                                { width: this.width * 0.8 },
                                            ]}
                                        />
                                        {errors.password && (
                                            <Text style={styles.errors}>
                                                {errors.password}
                                            </Text>
                                        )}
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 5,
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <CustomBottoms
                                            text="Şifreyi Unuttum"
                                            textColor={'#5056F1'}
                                            onPress={() => {}}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 7,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <CustomBottoms
                                            text="Hesap Oluştur"
                                            borderWidth={1}
                                            borderRadius={10}
                                            borderColor={'#5056F1'}
                                            width={this.width * 0.8}
                                            height={this.height * 0.05}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            textColor={'#5056F1'}
                                            onPress={handleSubmit}
                                        />
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginArea: {
        marginTop: '30%',
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#5056F1',
    },
    errors: { color: '#FF0000' },
    text: { color: 'black', fontWeight: '600' },
    textInput: {
        color: '#000',
        borderRadius: 10,
        borderColor: '#5056F1',
        backgroundColor: 'white',
        marginLeft: 5,
        borderWidth: 1,
    },
    girisYapSubmit: {
        borderColor: '#5056F1',
        justifyContent: 'center',
    },
    submidText: { color: '#5056F1' },
})
