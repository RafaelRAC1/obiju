import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import { IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CustomMainHeader from '../components/Header';
import artists from '../mock/artist.json';
import products from '../mock/products.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 60
    },
    content: {
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'column',
        rowGap: 30
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
        fontSize: 18
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
    productImageContainer: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },
    productImage: {
        width: '64%',
        height: 220,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    productSecondaryImageContainer: {
        flexDirection: 'column',
        flex: 1,
        rowGap: 10
    },
    productSecondaryImage: {
        width: "100%",
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
});

const RegisterProductScreen = () => {
    const [selectedImages, setSelectedImages] = useState([
        'https://th.bing.com/th/id/OIP.9sQLYlLqKw8xbGSN8E-aJAHaHa?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.9sQLYlLqKw8xbGSN8E-aJAHaHa?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.9sQLYlLqKw8xbGSN8E-aJAHaHa?rs=1&pid=ImgDetMain',
    ]);

    const handleImagePick = async (index) => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access the gallery is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const updatedImages = [...selectedImages];
            updatedImages[index] = result.assets[0].uri;
            setSelectedImages(updatedImages);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.mainContainer}>
                <CustomMainHeader
                    navigation={""}
                    showChevron={true}
                    hasLogo={true}
                    icons={[{ name: 'package-variant-closed', onPress: () => "" },
                    { name: 'account-circle', onPress: () => "" }
                    ]}
                />
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.bold}>CADASTRAR PRODUTO</Text>
                        <View style={styles.productImageContainer}>
                            <TouchableOpacity onPress={() => handleImagePick(0)} style={styles.productImage}>
                                <Image
                                    style={{ flex: 1, height: '100%', borderRadius: 10 }}
                                    source={{ uri: selectedImages[0] }}
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                            <View style={styles.productSecondaryImageContainer}>
                                <TouchableOpacity onPress={() => handleImagePick(1)}>
                                    <Image
                                        style={styles.productSecondaryImage}
                                        source={{ uri: selectedImages[1] }}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleImagePick(2)}>
                                    <Image
                                        style={styles.productSecondaryImage}
                                        source={{ uri: selectedImages[2] }}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <InputField placeholder="Título" />
                            <InputField placeholder="Descrição" />
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

export default RegisterProductScreen;