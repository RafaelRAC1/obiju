import React, { useState } from 'react';
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
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const requestData = {
                firstName: name,
                lastName: surname,
                birthDate: birthDate.toISOString().split('T')[0],
                email: email,
                phone: phone,
                password: password,
                profilePicture: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
            };

            const response = await fetch('http://host:8080/api/creators', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(requestData)
            });

            console.log('Response status:', response.status); // Debug log

            
            const responseData = await response.json().catch(e => ({}));
            console.log('Response data:', responseData); // Debug log

            if (!response.ok) {
                throw new Error(responseData.message || `Error ${response.status}: ${response.statusText}`);
            } else {
                navigation.goBack()
            }
             
        } catch (error) {
            //todo
        }
    }

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
                                <InputField placeholder="Nome" inputWidth='47%' value={name} onChangeText={setName} />
                                <InputField placeholder="Sobrenome" inputWidth='47%' value={surname} onChangeText={setSurname} />
                            </View>
                            <View style={styles.inputGroup}>
                                <InputField placeholder="Telefone" inputWidth='47%' value={phone} onChangeText={setPhone} />
                                <InputField placeholder="Data Nasc." inputWidth='47%' value={birthDate} onChangeText={setBirthDate} date={true}/>
                            </View>
                            <InputField placeholder="E-mail" value={email} onChangeText={setEmail} />
                            <InputField placeholder="Senha" secureTextEntry={true} value={password} onChangeText={setPassword} />
                            <InputField placeholder="Confirmar Senha" secureTextEntry={true} value={password} onChangeText={setPassword} />
                        </View>
                        <View style={styles.formEndContainer}>
                            <IconButton
                                icon="chevron-right"
                                iconColor='rgba(0, 0, 0, 0.6)'
                                size={20}
                                backgroundColor='#C9C9C9'
                                onPress={handleSubmit}
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
};



export default LoginScreen;