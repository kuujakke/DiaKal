import React, { Component } from 'react'
import {
    List, ListItem, Separator, Text,
} from 'native-base'
import { connect } from 'react-redux'
import {
    setDefaultTargetBloodGlucose,
    setCarbohydratesEffectiveness,
    setBloodGlucoseEffectiveness,
} from '../reducers/settingsReducer'
import InputField from './InputField'

class SettingsView extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <List>
                <ListItem>
                    <InputField label={'Tavoiteverensokeri (mmol/l)'}
                                onChange={e => this.props.setDefaultTargetBloodGlucose(e)}
                    />
                </ListItem>
                <Separator>
                    <Text style={{fontSize: 20}}>INSULIININ VAIKUTUS</Text>
                </Separator>
                <ListItem>
                    <InputField label={'Hiilihydraatit\n(g)'}
                                subtext={'Aikuisella 1 yksikkö pikainsuliinia kattaa n. 5–20 g hiilihydraattia.'}
                                onChange={e => this.props.setCarbohydratesEffectiveness(e)}
                    />
                    <InputField label={'Verensokeri\n(mmol/l)'}
                                subtext={'Aikuisella 1 yksikkö pikainsuliinia laskee verensokeria n. 1–4 mmol/l.'}
                                onChange={e => this.props.setBloodGlucoseEffectiveness(e)}
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
        setDefaultTargetBloodGlucose,
        setCarbohydratesEffectiveness,
        setBloodGlucoseEffectiveness,
    },
)(SettingsView)

export default ConnectedSettingsView