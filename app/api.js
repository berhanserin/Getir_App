const axios = require('axios')
const { NativeModules } = require('react-native')

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

export default api
