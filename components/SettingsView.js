import React, { Component } from 'react'
import {
    List, ListItem, Separator, Text,
} from 'native-base'
import { connect } from 'react-redux'
import {
    setDefaultTargetBloodGlucose,
    setCarbohydratesEffectiveness,
    setBloodGlucoseEffectiveness,
    initializeSettings,
} from '../reducers/settingsReducer'
import InputField from './InputField'

class SettingsView extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.initializeSettings()
    }

    render () {
        return (
            <List>
                <ListItem>
                    <InputField label={'Tavoiteverensokeri (mmol/l)'}
                                onChange={this.props.setDefaultTargetBloodGlucose}
                                value={this.props.settings.defaultTargetBloodGlucose}
                    />
                </ListItem>
                <Separator>
                    <Text style={{fontSize: 20}}>PIKAINSULIININ VAIKUTUS</Text>
                </Separator>
                <ListItem>
                    <InputField label={'Hiilihydraatit\n(g)'}
                                subtext={'Aikuisella 1 yksikkö pikainsuliinia kattaa n. 5–20 g hiilihydraattia.'}
                                onChange={this.props.setCarbohydratesEffectiveness}
                                value={this.props.settings.carbohydratesEffectiveness}
                    />
                    <InputField label={'Verensokeri\n(mmol/l)'}
                                subtext={'Aikuisella 1 yksikkö pikainsuliinia laskee verensokeria n. 1–4 mmol/l.'}
                                onChange={this.props.setBloodGlucoseEffectiveness}
                                value={this.props.settings.bloodGlucoseEffectiveness}
                    />
                </ListItem>
            </List>
        )
    }
}

const mapStateToProps = (state) => ({settings: state.settings})

const ConnectedSettingsView = connect(
    mapStateToProps,
    {
        initializeSettings,
        setDefaultTargetBloodGlucose,
        setCarbohydratesEffectiveness,
        setBloodGlucoseEffectiveness,
    },
)(SettingsView)

export default ConnectedSettingsView