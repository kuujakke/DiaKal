import React, { Component } from 'react'
import { List, ListItem, Text, Separator } from 'native-base'
import { connect } from 'react-redux'
import {
    setBloodGlucose, setCarbohydrates, setTargetBloodGlucose,
} from '../reducers/calculatorReducer'
import Effectiveness from './Effectiveness'
import InputField from './InputField'

class CalculatorView extends Component {
    constructor (props) {
        super(props)
    }

    onBloodGlucoseChange = (bloodGlucose) => {
        this.props.setBloodGlucose(bloodGlucose)
    }

    onTargetBloodGlucoseChange = (targetBloodGlucose) => {
        this.props.setTargetBloodGlucose(targetBloodGlucose)
    }

    onCarbohydratesChange = (carbohydrates) => {
        this.props.setCarbohydrates(carbohydrates)
    }

    render () {
        return (
            <List>
                <Separator>
                    <Text style={separatorStyle}>INSULIININ TEHO</Text>
                </Separator>
                <ListItem>
                    <Effectiveness
                        effectiveness={this.props.effectiveness}/>
                </ListItem>
                <Separator>
                    <Text style={separatorStyle}>VERENSOKERI</Text>
                </Separator>
                <ListItem>
                    <InputField label={'Verensokerisi nyt\n(mmol/l)'}
                                onChange={this.onBloodGlucoseChange}
                                value={this.props.bloodGlucose}
                    />
                    <InputField label={'Tavoiteverensokeri\n(mmol/l)'}
                                onChange={this.onTargetBloodGlucoseChange}
                                value={this.props.targetBloodGlucose || this.props.defaultTargetBloodGlucose}
                    />
                </ListItem>
                <Separator>
                    <Text style={separatorStyle}>HIILIHYDRAATIT</Text>
                </Separator>
                <ListItem>
                    <InputField label={'Hiilihydraatteja\n(g)'}
                                onChange={this.onCarbohydratesChange}
                                value={this.props.carbohydrates}
                    />
                </ListItem>
                <Separator>
                    <Text style={separatorStyle}>INSULIINIANNOS</Text>
                </Separator>
                <ListItem>
                    <Text
                        style={textStyle}>{Math.round(this.props.insulinUnits *
                        10) / 10}</Text>
                </ListItem>
            </List>
        )
    }
}

const separatorStyle = {fontSize: 20}

const textStyle = {fontSize: 20}

const mapStateToProps = (state) => ({
    ...state.calculator,
    defaultTargetBloodGlucose: state.settings.defaultTargetBloodGlucose,
})

const ConnectedCalculatorView = connect(
    mapStateToProps,
    {
        setBloodGlucose,
        setCarbohydrates,
        setTargetBloodGlucose,
    },
)(CalculatorView)

export default ConnectedCalculatorView