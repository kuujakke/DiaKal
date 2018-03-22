import React from 'react'
import { Form, Input, Item, Label } from 'native-base'

const InputField = ({label}) => {
    return (
        <Form style={{width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Item floatingLabel rounded>
                <Label style={{
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 2
                }}>{label}</Label>
                <Input keyboardType={'numeric'}
                       textAlign={'center'} maxLength={3}/>
            </Item>
        </Form>
    )
}

export default InputField