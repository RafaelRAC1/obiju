import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    inputs: {
        borderBottomWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.5)'
    }
});

const InputField = ({ placeholder, secureTextEntry, inputWidth = '100%', value = "", onChangeText = () => { }, date = false }) => {
    const [show, setShow] = useState(false);
    const [lclDate, setDate] = useState(null);
    return (
        <View style={{ width: inputWidth }}>
            {date != true ?
                (
                    <TextInput
                        style={[styles.inputs]}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        value={value}
                        onChangeText={onChangeText}
                    />
                )
                :
                (
                    <View>
                        <TouchableOpacity onPress={() => setShow(true)}>
                            <TextInput
                                style={[styles.inputs]}
                                placeholder={placeholder}
                                value={lclDate ? lclDate.toLocaleDateString('pt-BR') : ""}
                                editable={false}
                            />
                        </TouchableOpacity>

                        {show && (
                            <DateTimePicker
                                value={lclDate ?? new Date()}
                                mode="date"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShow(false);
                                    if (selectedDate) {
                                        setDate(selectedDate);
                                        onChangeText(selectedDate); 
                                    }
                                }}
                            />
                        )}
                    </View>
                )}
        </View>
    )
}

export default InputField;