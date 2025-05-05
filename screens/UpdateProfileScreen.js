import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CustomMainHeader from '../components/Header';
import artists from '../mock/artist.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';

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
        rowGap: 14
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
    },
    pfpImageContainer: {
        flex: 1,
        position: 'relative'
    },
    pfpImage: {
        width: 160,
        height: 160,
        borderRadius: 200,
        alignSelf: 'center'
    },
    pfpImageEdit: {
        width: 160,
        height: 160,
        borderRadius: 200,
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkBoxesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBoxText: {
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14
    }
});

const UpdateProfileScreen = () => {
    const [emailChecked, setCheckedEmail] = useState(false);
    const [passwordChecked, setCheckedPassword] = useState(false);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.mainContainer}>
                <CustomMainHeader
                    navigation={""}
                    showChevron={true}
                    hasLogo={true}
                    icons={[{ name: 'package-variant-closed', onPress: () => "" }]}
                />
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View styles={styles.pfpImageContainer}>
                            <Image
                                style={styles.pfpImage}
                                source={{ uri: artists[0].pfp }}
                                resizeMode='cover'
                            />
                            <View style={styles.pfpImageEdit}>
                                <Icon style={styles.pfpImageEditIcon} name="pencil" size={40} color="white" />
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.inputGroup}>
                                <InputField placeholder="Nome" inputWidth='47%' />
                                <InputField placeholder="Sobrenome" inputWidth='47%' />
                            </View>
                            <InputField placeholder="Data Nasc." />
                            <View style={styles.checkBoxesContainer}>
                                <View style={styles.checkBoxContainer}>
                                    <Checkbox
                                        status={emailChecked ? 'checked' : 'unchecked'}
                                        onPress={() => setCheckedEmail(!emailChecked)}
                                    />
                                    <Text style={styles.checkBoxText}>Alterar e-mail</Text>
                                </View>
                                <View style={styles.checkBoxContainer}>
                                    <Checkbox
                                        status={passwordChecked ? 'checked' : 'unchecked'}
                                        onPress={() => [setCheckedPassword(!passwordChecked)]}
                                    />
                                    <Text style={styles.checkBoxText}>Alterar senha</Text>
                                </View>
                            </View>
                            {emailChecked && (
                                <InputField placeholder="E-mail" />
                            )}
                            {passwordChecked && (
                                <View style={styles.inputContainer}>
                                    <InputField placeholder="Senha" secureTextEntry={true} />
                                    <InputField placeholder="Confirmar Senha" secureTextEntry={true} />
                                </View>
                            )}
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

export default UpdateProfileScreen;