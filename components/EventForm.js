import React, { Component } from 'react'
import t from 'tcomb-form-native'
import { Button, View } from 'react-native'
import { connect } from 'react-redux'
import { resetNewEvent, setNewEvent } from '../reducers/newEventReducer'
import { createEvent, synchronizeEvents } from '../reducers/eventReducer'
import moment from 'moment'
import { MaterialCommunityIcons } from '@expo/vector-icons/index'

const Form = t.form.Form

const Event = t.struct({
    content: t.String,
})

const options = {}

class EventForm extends Component {
    constructor (props) {
        super(props)
    }

    onPress = async () => {
        let event = {
            content: this.props.newEvent.content,
            timestamp: Number(moment().format('x')),
            year: Number(moment().format('YYYY')),
            month: Number(moment().format('MM')),
            day: Number(moment().format('DD')),
        }
        const response = await this.props.createEvent(event)
        if (response.error) {
            console.log(response.error.message)
        } else if (response.success) {
            this.props.resetNewEvent()
            this.props.synchronizeEvents()
        }
    }

    onChange = (event) => {
        this.props.setNewEvent(event)
    }

    render () {
        return (
            <View>
                <Form
                    ref={'form'}
                    type={Event}
                    options={options}
                    onChange={this.onChange}
                    value={this.props.newEvent}
                />
                <Button onPress={this.onPress}
                        icon={<MaterialCommunityIcons name='database-plus'/>}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {newEvent: state.newEvent}
}

export default connect(mapStateToProps,
    {setNewEvent, createEvent, resetNewEvent, synchronizeEvents})(EventForm)