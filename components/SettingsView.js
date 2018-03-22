import React, { Component } from 'react'
import {
    List, ListItem, Separator, Text,
} from 'native-base'
import { connect } from 'react-redux'
import { setTargetBloodGlucose } from '../reducers/calculatorReducer'
import InputField from './InputField'

class SettingsView extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <List>
                <ListItem>
                    <InputField label={'Tavoiteverensokeri'}/>
                </ListItem>
                <Separator>
                    <Text style={{fontSize: 20}}>INSULIININ VAIKUTUS</Text>
                </Separator>
                <ListItem>
                    <InputField label={'Hiilihydraatteja (g/yksikkö)'}/>
                </ListItem>
                <ListItem>
                    <InputField label={'Verensokeria (Mmol/l/yksikkö)'}/>
                </ListItem>
            </List>
        )
    }
}

const mapStateToProps = (state) => ({settings: state.settings})

const ConnectedSettingsView = connect(
    mapStateToProps,
    {
        setTargetBloodGlucose,
    },
)(SettingsView)

export default ConnectedSettingsView