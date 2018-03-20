import React from 'react'
import CalculatorView from '../components/CalculatorView'
import { View } from 'react-native'

export default class CalculatorScreen extends React.Component {
    render () {
        return (
            <View style={{
                flex: 1,
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}>
                <CalculatorView/>
            </View>
        )
    }
}