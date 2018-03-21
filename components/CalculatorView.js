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
    setBloodGlucose, setCarbohydrates, setEffectiveness, setTargetBloodGlucose,
} from '../reducers/calculatorReducer'
import * as Vibration from 'react-native/Libraries/Vibration/Vibration'

class CalculatorView extends Component {
    constructor (props) {
        super(props)
    }

    effectivenessPercentageString () {
        const percentage = Math.round((this.props.calculator.effectiveness -
            1) * 100)
        if (percentage >= 1) {
            return `+${percentage} %`
        }
        return `${percentage} %`
    }

    onBloodGlucoseChange = async (bloodGlucose) => {
        await this.props.setBloodGlucose(bloodGlucose)
    }

    onTargetBloodGlucoseChange = async (targetBloodGlucose) => {
        await this.props.setTargetBloodGlucose(targetBloodGlucose)
    }

    onCarbohydratesChange = async (carbohydrates) => {
        await this.props.setCarbohydrates(carbohydrates)
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
                                step={0.05}
                                onValueChange={async (v) => {
                                    await this.props.setEffectiveness(v)
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
                            <Text
                                style={textStyle}>{this.effectivenessPercentageString()}</Text>
                        </ListItem>
                        <Separator>
                            <Text style={separatorStyle}>VERENSOKERI</Text>
                        </Separator>
                        <ListItem>
                            <Content>
                                <Form>
                                    <Item fixedLabel>
                                        <Label style={textStyle}>Mmol/l</Label>
                                        <Input keyboardType={'numeric'}
                                               onChangeText={this.onBloodGlucoseChange}
                                               style={textStyle}
                                        />
                                    </Item>
                                    <Item fixedLabel last>
                                        <Label style={textStyle}>Tavoite
                                            Mmol/l</Label>
                                        <Input keyboardType={'numeric'}
                                               onChangeText={this.onTargetBloodGlucoseChange}
                                               style={textStyle}
                                               defaultValue={this.props.calculator.targetBloodGlucose.toString()}
                                        />
                                    </Item>
                                </Form>
                            </Content>
                        </ListItem>
                        <Separator>
                            <Text style={separatorStyle}>HIILIHYDRAATIT</Text>
                        </Separator>
                        <ListItem>
                            <Content>
                                <Form>
                                    <Item fixedLabel>
                                        <Label style={textStyle}>Grammaa</Label>
                                        <Input keyboardType={'numeric'}
                                               onChangeText={this.onCarbohydratesChange}
                                               style={textStyle}
                                        />
                                    </Item>
                                </Form>
                            </Content>
                        </ListItem>
                        <Separator>
                            <Text style={separatorStyle}>INSULIINIANNOS</Text>
                        </Separator>
                        <ListItem>
                            <Text
                                style={textStyle}>{Math.round(this.props.calculator.insulinUnits *
                                10) / 10}</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

const separatorStyle = {fontSize: 20}

const textStyle = {fontSize: 20}

const mapStateToProps = (state) => ({calculator: state.calculator})

const ConnectedCalculatorView = connect(
    mapStateToProps,
    {
        setEffectiveness,
        setBloodGlucose,
        setCarbohydrates,
        setTargetBloodGlucose,
    },
)(CalculatorView)

export default ConnectedCalculatorView