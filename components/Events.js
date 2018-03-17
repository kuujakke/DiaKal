import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import { Agenda } from 'react-native-calendars'

export default class AgendaScreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            items: {},
        }
    }

    render () {
        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                theme={{
                    agendaKnobColor: 'teal',
                    agendaDayTextColor: 'teal',
                    agendaDayNumColor: 'teal',
                    agendaTodayColor: 'tomato',
                    selectedDayBackgroundColor: 'teal',
                    todayTextColor: 'tomato'
                }}
            />
        )
    }

    loadItems (day) {
        console.log(day)
    }

    renderItem (item) {
        return (
            <View style={[styles.item, {height: item.height}]}>
                <Text>{item.name}</Text>
            </View>
        )
    }

    renderEmptyDate () {
        return (
            <View style={styles.emptyDate}>
                <Text>Ei merkintöjä.</Text>
            </View>
        )
    }

    rowHasChanged (r1, r2) {
        return r1.name !== r2.name
    }

    timeToString (time) {
        const date = new Date(time)
        return date.toISOString().split('T')[0]
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
})