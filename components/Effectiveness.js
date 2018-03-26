import React, { Component } from 'react'
import { Slider, Vibration } from 'react-native'
import { Content, Text } from 'native-base'
import { setEffectiveness } from '../reducers/calculatorReducer'
import { connect } from 'react-redux'

class Effectiveness extends Component {
    onChange = (value) => {
        this.props.setEffectiveness(value)
    }

    slidingComplete () {
        Vibration.vibrate(50)
    }

    effectivenessPercentageString () {
        const percentage = Math.round((this.props.effectiveness - 1) * 100)
        if (percentage >= 1) {
            return `+${percentage} %`
        }
        return `${percentage} %`
    }

    render () {
        const textStyle = {
            fontSize: 20,
            justifyContent: 'center',
            textAlign: 'center',
            paddingBottom: 40,
        }
        return (
            <Content>
                <Text style={textStyle}>{this.effectivenessPercentageString()}</Text>
                <Slider
                    value={this.props.effectiveness}
                    minimumValue={0}
                    maximumValue={2}
                    step={0.05}
                    onValueChange={this.onChange}
                    onSlidingComplete={this.slidingComplete}
                    thumbTouchSize={{width: 150, height: 100}}
                    thumbStyle={{width: 100, height: 100}}
                    style={{width: '100%'}}
                />
            </Content>
        )
    }
}

mapStateToProps = (state) => ({effectiveness: state.calculator.effectiveness})

const ConnectedEffectiveness = connect(mapStateToProps, {setEffectiveness})(
    Effectiveness)

export default ConnectedEffectiveness