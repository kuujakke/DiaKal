import React from 'react'
import EventForm from '../components/EventForm'
import { View } from 'react-native'

export default class NewEventScreen extends React.Component {
    render () {
        return (
            <View style={{
                flex: 1,
                flexGrow: 1,
                width: '100%',
                marginTop: 25
            }}>
                <EventForm/>
            </View>
        )
    }
}