import React from 'react'
import CalendarView from '../components/CalendarView'
import { View } from 'react-native'

export default class CalendarScreen extends React.Component {
    render () {
        return (
            <View style={{
                flex: 1,
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}>
                <CalendarView/>
            </View>
        )
    }
}