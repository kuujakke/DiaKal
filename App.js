import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './config/locales'
import RootContainer from './components/RootContainer'
import Amplify from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react-native'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

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
