import React from 'react';
import { Image, StyleSheet, View, Text, Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CustomMainHeader from '../components/Header';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 60,
        position: 'relative'
    },
    content: {
        width: '70%',
        alignSelf: 'center',
        flexDirection: 'column',
        rowGap: 30
    },
    backgroundArt: {
        color: 'red',
        position: 'absolute',
        height: 120,
        width: 200,
        right: 0
    },
    logo: {
        width: 125,
        height: 63
    },
    mainTextContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    semiBold: {
        fontWeight: '700'
    },
    bold: {
        fontWeight: '700',
        fontSize: 30
    },
    mainTextLine: {
        fontSize: 25,
        fontFamily: 'Segoe UI'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    formEndContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomDiv: {
        flex: 1,
        width: '100%',
        postion: 'relative'
    }
});

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.mainContainer}>
                <CustomMainHeader
                    navigation={navigation}
                    showChevron={true}
                />
                <View style={styles.container}>
                    <Image
                        style={styles.backgroundArt}
                        source={require('../assets/images/sparkles.png')}
                        resizeMode="contain"
                    />
                    <View style={styles.content}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/obiju_logo.png')}
                            resizeMode="contain"
                        />
                        <View style={styles.mainTextContainer}>
                            <Text style={styles.mainTextLine}>CRIE SUA CONTA</Text>
                            <Text style={[styles.bold]}>AGORA</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputGroup}>
                                <InputField placeholder="Nome" inputWidth='47%' />
                                <InputField placeholder="Sobrenome" inputWidth='47%' />
                            </View>
                            <View style={styles.inputGroup}>
                                <InputField placeholder="Telefone" inputWidth='47%' />
                                <InputField placeholder="Data Nasc." inputWidth='47%' />
                            </View>
                            <InputField placeholder="E-mail" />
                            <InputField placeholder="Senha" secureTextEntry={true} />
                            <InputField placeholder="Confirmar Senha" secureTextEntry={true} />
                        </View>
                        <View style={styles.formEndContainer}>
                            <IconButton
                                icon="chevron-right"
                                iconColor='rgba(0, 0, 0, 0.6)'
                                size={20}
                                backgroundColor='#C9C9C9'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomDiv}>
                    <LinearGradient
                        colors={['#B367E5', '#CBA4E3', '#ECE0F2']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default LoginScreen;