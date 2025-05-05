import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    inputs: {
        borderBottomWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.5)'
    }
});

const InputField = ({ placeholder, secureTextEntry, inputWidth = '100%' }) => {
    return (
        <TextInput
            style={[styles.inputs, {width: inputWidth}]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default InputField;