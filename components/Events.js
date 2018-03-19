import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import { Agenda } from 'react-native-calendars'
import { initializeEvents } from '../reducers/eventReducer'
import { connect } from 'react-redux'
import moment from 'moment'

class Events extends Component {
    constructor (props) {
        super(props)
        this.state = {
            items: {},
        }
    }

    async componentDidMount () {
        await this.props.initializeEvents()
    }

    render () {

        return (
            <Agenda
                items={this.eventsByDay(this.props.events)}
                loadItemsForMonth={this.loadItems.bind(this)}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                onCalendarToggled={this.calendarToggle.bind(this)}
                theme={{
                    agendaKnobColor: 'gray',
                    agendaDayTextColor: 'teal',
                    agendaDayNumColor: 'teal',
                    agendaTodayColor: 'tomato',
                    selectedDayBackgroundColor: 'teal',
                    todayTextColor: 'tomato',
                }}
            />
        )
    }

    eventsByDay (events) {
        let eventsPerDay = {}
        events.forEach(event => {
            if (event && !!event.content && !!event.timestamp) {
                const date = moment(event.timestamp).format('YYYY-MM-DD')
                if (eventsPerDay[date]) {
                    eventsPerDay[date] = [...eventsPerDay[date], {...event}]
                } else {
                    eventsPerDay[date] = [{...event}]
                }
            }
        })
        return eventsPerDay
    }

    loadItems (day) {
        const daysEvents = this.props.events.filter(
            e => moment(e.timestamp).isSame(day.timestamp, 'month'))
        return this.eventsByDay(daysEvents)
    }

    renderItem (item) {
        return (
            <View style={[styles.item, {height: item.height}]}>
                <Text>{item.content}</Text>
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

    calendarToggle () {
        console.log(this.props.events)
    }

    rowHasChanged (r1, r2) {
        return r1.content !== r2.content
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

const mapStateToProps = (state) => {
    return {events: state.events}
}

const mapDispatchToProps = {
    initializeEvents,
}

const ConnectedEvents = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Events)

export default ConnectedEvents