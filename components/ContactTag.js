import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    contact: {
        flexDirection: 'row',
        columnGap: 5,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 3,
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: 'lightgray'
    },
    contactText: {
        color: 'black'
    }
});

const ContactTag = ({ iconName, title, color }) => {
    return (
        <View style={styles.contact}>
            <Icon name={iconName} size={17} color={color} />
            <Text style={styles.contactText}>{title}</Text>
        </View>
    )
}

export default ContactTag;