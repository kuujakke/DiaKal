import React from 'react'
import CalculatorView from '../components/CalculatorView'
import { Container, Content, Header } from 'native-base'

export default class CalculatorScreen extends React.Component {
    render () {
        return (
            <Container>
                <Header/>
                <Content>
                    <CalculatorView/>
                </Content>
            </Container>
        )
    }
}