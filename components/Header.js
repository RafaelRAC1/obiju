import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, Image } from 'react-native';
import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F9F9F9',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        height: 80
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLogo: {
        width: 100,
        height: 40
    },
    iconsContainer: {
        flexDirection: 'row'
    }
});

const CustomMainHeader = ({ navigation, icons = [], showChevron = false, hasLogo = false }) => (
    <View style={[styles.header]}>
        {showChevron ? (
            <IconButton
                icon="chevron-left"
                iconColor='rgba(0, 0, 0, 0.7)'
                size={40}
                onPress={() => navigation.goBack()}
            />
        ) : (
            null
        )}
        {hasLogo ? (
            <Image
            style={[styles.headerLogo]}
            source={require('../assets/images/obiju_logo.png')}
            resizeMode="contain"
        />
        ) : (
            null
        )}
        
        {icons.length > 0 ? (
            <View style={styles.iconsContainer}>
                {icons.map((icon, index) => (
                    <IconButton
                        key={index}
                        icon={icon.name}
                        iconColor={icon.color || 'rgba(0, 0, 0, 0.7)'}
                        size={icon.size || 30}
                        onPress={icon.onPress ? icon.onPress : () => navigation.goBack()}
                        style={styles.icon}
                    />
                ))}
            </View>
        ) : (
            null
        )}
    </View>
);

export default CustomMainHeader;
