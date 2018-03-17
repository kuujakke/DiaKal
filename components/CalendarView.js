import React, { Component } from 'react'

import { Calendar } from 'react-native-calendars'
import { View } from 'react-native'

export default class CalendarView extends Component {
    constructor (props) {
        super(props)
    }

    handleDayPress () {
        this.props.navigation.navigate('Day')
    }

    render () {
        return (
            <View style={{width: '100%'}}>
                <Calendar
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                    }}
                    onDayPress={this.handleDayPress}
                />
            </View>
        )
    }
}