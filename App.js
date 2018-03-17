import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './config/locales'
import RootContainer from './components/RootContainer'
import {withAuthenticator} from 'aws-amplify-react-native'

class App extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <Provider store={store}>
            <RootContainer/>
        </Provider>
    }
}

export default withAuthenticator(App)
