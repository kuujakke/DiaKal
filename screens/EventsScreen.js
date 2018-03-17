import React from 'react'
import Events from '../components/Events'
import { View } from 'react-native'

export default class EventsScreen extends React.Component {
    render () {
        return (
            <View style={{
                flex: 1,
                flexGrow: 1,
                width: '100%',
                marginTop: 25
            }}>
                <Events/>
            </View>
        )
    }
}