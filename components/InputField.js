import React from 'react'
import { Content, Form, Input, Item, Label, Text } from 'native-base'

const InputField = ({label, subtext}) => {
    return (
        <Content style={{flex: 1, padding: 5}}>
            <Label style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 20,
            }}>{label}</Label>
            <Form style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Item rounded>
                    <Input keyboardType={'numeric'}
                           textAlign={'center'} maxLength={3}/>
                </Item>
            </Form>
            <Text style={{
                fontSize: 10,
                color: 'gray',
                textAlign: 'center',
            }}>{subtext}</Text>
        </Content>
    )
}

export default InputField