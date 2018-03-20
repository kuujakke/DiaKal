import React, { Component } from 'react'

import { Slider } from 'react-native'
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Separator, Form, Input, Label, Item,
} from 'native-base'
import { connect } from 'react-redux'
import {
    setBloodGlucose, setCalculatedDose,
    setEffectiveness,
} from '../reducers/calculatorReducer'
import * as Vibration from 'react-native/Libraries/Vibration/Vibration'

class CalculatorView extends Component {
    constructor (props) {
        super(props)
    }

    effectivenessPercentageString () {
        const percentage = (this.props.calculator.effectiveness - 1) * 100
        if (percentage >= 1) {
            return `+${percentage} %`
        }
        return `${percentage} %`
    }

    onBloodGlucoseChange = async (bloodGlucose) => {
        await this.props.setBloodGlucose(bloodGlucose)
        this.calculateDose()
    }

    calculateDose () {
        const effectiveness = this.props.calculator.effectiveness
        const bloodGlucose = this.props.calculator.bloodGlucose
        const BaseInsulinEffect = 2
        const targetBloodGlucose = 5
        const insulinEffectiveness = BaseInsulinEffect * effectiveness
        const excessGlucose = bloodGlucose - targetBloodGlucose
        const calculatedDose = excessGlucose / insulinEffectiveness
        const roundedDose = Math.round(calculatedDose  * 2) / 2
        this.props.setCalculatedDose(roundedDose)
    }

    render () {
        return (
            <Container>
                <Header/>
                <Content>
                    <List>
                        <Separator>
                            <Text style={separatorStyle}>INSULIININ TEHO</Text>
                        </Separator>
                        <ListItem>
                            <Slider
                                value={this.props.calculator.effectiveness}
                                minimumValue={0}
                                maximumValue={2}
                                step={0.25}
                                onValueChange={async (v) => {
                                        await this.props.setEffectiveness(v)
                                        this.calculateDose()
                                    }
                                }
                                onSlidingComplete={
                                    () => {
                                        Vibration.vibrate(50)
                                    }
                                }
                                thumbTouchSize={{width: 100, height: 100}}
                                thumbStyle={{width: 100, height: 100}}
                                style={{width: '100%'}}
                            />
                        </ListItem>
                        <ListItem>
                            <Text>{this.effectivenessPercentageString()}</Text>
                        </ListItem>
                        <Separator>
                            <Text style={separatorStyle}>MITATTU
                                VERENSOKERI</Text>
                        </Separator>
                        <ListItem>
                            <Form>
                                <Item stackedLabel>
                                    <Label>Mmol/l</Label>
                                    <Input keyboardType={'numeric'}
                                           onChangeText={this.onBloodGlucoseChange}/>
                                </Item>
                            </Form>
                        </ListItem>
                        <Separator>
                            <Text style={separatorStyle}>INSULIINIANNOS</Text>
                        </Separator>
                        <ListItem>
                            <Text>{this.props.calculator.calculatedDose}</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

const separatorStyle = {fontSize: 20}

const mapStateToProps = (state) => ({calculator: state.calculator})

const ConnectedCalculatorView = connect(
    mapStateToProps,
    {setEffectiveness, setBloodGlucose, setCalculatedDose},
)(CalculatorView)

export default ConnectedCalculatorView