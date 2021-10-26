import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Textinput from 'commons/Textinput/'
import CustomBottoms from 'commons/CustomBottoms/'
import * as yup from 'yup'
import { Formik } from 'formik'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginArea}>
                    <View
                        style={{
                            marginHorizontal: '8%',
                            marginVertical: '20%',
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
                                            style={styles.textInput}
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
                                            style={styles.textInput}
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
                                            textstyle={styles.submidText}
                                            click={() => {}}
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
                                            btnstyle={styles.girisYapSubmit}
                                            textstyle={styles.submidText}
                                            click={handleSubmit}
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
        height: '70%',
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
        width: '100%',
        borderColor: '#5056F1',
        backgroundColor: 'white',
        marginLeft: 5,
        borderWidth: 1,
    },
    girisYapSubmit: {
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5056F1',
    },
    submidText: { color: '#5056F1' },
})
