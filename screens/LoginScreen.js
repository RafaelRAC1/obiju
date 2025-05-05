import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import CustomMainHeader from '../components/Header'
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

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
    formEndContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomDiv: {
        flex: 1,
        width: '100%',
        postion: 'relative'
    },
    bottomPattern: {
        position: 'absolute',
        height: "190%",
        width: '100%',
        bottom: '-35%',
        right: '12%'
    }
});

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.mainContainer}>
                <CustomMainHeader navigation={navigation} showChevron={true} />
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
                            <Text style={styles.mainTextLine}>ENTRE PARA</Text>
                            <Text style={styles.mainTextLine}>
                                <Text style={styles.semiBold}>ANUNCIAR</Text> SEUS
                            </Text>
                            <Text style={[styles.bold]}>BIJUS</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <InputField placeholder="E-mail"></InputField>
                            <InputField placeholder="Senha" secureTextEntry={true}></InputField>
                        </View>
                        <View style={styles.formEndContainer}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
                                <Text>
                                    Não possui conta?
                                </Text>
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('SignupScreen') }}
                                    style={{ padding: 5 }}
                                >
                                    <Text style={{ color: '#6A91F4' }}> Cadastre-se</Text>
                                </TouchableOpacity>
                            </View>
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
                    <Image
                        style={styles.bottomPattern}
                        source={require('../assets/images/handJewelry.png')}
                        resizeMode="contain"
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default LoginScreen;