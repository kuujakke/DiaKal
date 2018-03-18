import React, { Component } from 'react'
import t from 'tcomb-form-native'
import { Button, View } from 'react-native'
import { connect } from 'react-redux'
import { setNewEvent } from '../reducers/newEventReducer'

const Form = t.form.Form

const Event = t.struct({
    content: t.String,
})

const options = {}

class EventForm extends Component {
    constructor (props) {
        super(props)
    }

    onPress (e) {
        console.log('tallenna', e)
        console.log(this.refs)
    }

    onChange (event) {
        console.log(event)
        console.log(this.props)
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
                />
                <Button onPress={this.onPress} title={'Tallenna'}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {newEvent: state.newEvent}
}

export default connect(mapStateToProps, {setNewEvent})(EventForm)