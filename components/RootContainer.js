import React, { Component } from 'react'
import Navigation from './Navigation'
import { connect } from 'react-redux'
import {
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation'
import { BackHandler } from 'react-native'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'

const addListener = createReduxBoundAddListener('root')

class RootContainer extends Component {

    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }

    onBackPress = () => {
        const {dispatch, navigation} = this.props
        if (navigation.index === 0) {
            return false
        }
        dispatch(NavigationActions.back())
        return true
    }

    render () {
        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
            addListener,
        })
        return (
            <Navigation navigation={navigation}/>
        )
    }
}

const mapStateToProps = (state) => ({navigation: state.navigation})

const ConnectedRootContainer = connect(mapStateToProps)(RootContainer)

export default ConnectedRootContainer