import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileProductsScreen from '../screens/ProfileProductsScreen'
import UpdateProfileScreen from '../screens/UpdateProfileScreen'
import RegisterProductScreen from '../screens/RegisterProductScreen'

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { elevation: 0, shadowOpacity: 0 },
                headerTintColor: 'rgba(0, 0, 0, 0.8)',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>

            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProductScreen"
                component={ProductScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProfileProductsScreen"
                component={ProfileProductsScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UpdateProfileScreen"
                component={UpdateProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="RegisterProductScreen"
                component={RegisterProductScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
