import React from 'react'
import SettingsView from '../components/SettingsView'
import { Container, Content, Header } from 'native-base'

const SettingsScreen = () => {
    return (
        <Container>
            <Header/>
            <Content>
                <SettingsView/>
            </Content>
        </Container>
    )
}

export default SettingsScreen