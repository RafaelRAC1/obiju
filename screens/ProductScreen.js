import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CustomMainHeader from '../components/Header';
import products from '../mock/products.json';
import artists from '../mock/artist.json';
import ListProducts from '../components/ListProducts';
import ContactTag from '../components/ContactTag';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5
    },
    textContainer: {
        alignSelf: 'left',
        position: 'relative'
    },
    productContainer: {
        width: '88%',
        flexDirection: 'column',
        rowGap: 22,
        alignSelf: 'center',
        paddingVertical: 22
    },
    productTitle: {
        fontWeight: 600,
        fontSize: 20,
        marginBottom: 10
    },
    productImagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        width: '100%'
    },
    productMainImage: {
        width: '68%',
        height: 220,
        borderRadius: 10,
    },
    productSecondaryImageContainer: {
        flexDirection: 'column',
        flex: 1,
        rowGap: 10
    },
    productSecondaryImage: {
        width: "100%",
        height: 100,
        borderRadius: 10
    },
    artist: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    artistImage: {
        height: 65,
        width: 65,
        borderRadius: 100
    },
    artistNameContainer: {
        flexDirection: 'column',
        rowGap: 2
    },
    contactContainer: {

    },
    contacts: {
        flexDirection: 'row',
        columnGap: 5,
    },
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
    },
    bold: {
        fontWeight: 600
    },
    secondTitle: {
        fontWeight: 600,
        fontSize: 16,
        marginBottom: 3
    },
    horizontalProductsContainer: {
        marginLeft: 10
    }
});

const ProductScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <ScrollView>
                <CustomMainHeader
                    navigation={navigation}
                    showChevron={true}
                    hasLogo={true}
                    icons={[
                        { name: 'package-variant-closed', onPress: () => navigation.navigate('SignupScreen') },
                        { name: 'account-circle', onPress: () => navigation.navigate('SignupScreen') }
                    ]}
                />
                <SafeAreaView style={styles.mainContainer}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={[styles.textContainer, styles.productTitle]}>
                                Colar de Esmeraldas
                            </Text>
                            <View style={styles.productImagesContainer}>
                                <Image
                                    style={styles.productMainImage}
                                    source={{ uri: products[0].image }}
                                    resizeMode="cover"
                                />
                                <View style={styles.productSecondaryImageContainer}>
                                    <Image
                                        style={styles.productSecondaryImage}
                                        source={{ uri: products[0].image }}
                                        resizeMode="cover"
                                    />
                                    <Image
                                        style={styles.productSecondaryImage}
                                        source={{ uri: products[0].image }}
                                        resizeMode="cover"
                                    />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.artist} onPress={() => navigation.navigate("ProfileScreen")}>
                            <Image
                                source={{ uri: artists[0].pfp }}
                                style={styles.artistImage}
                            />
                            <View style={styles.artistNameContainer}>
                                <View>
                                    <Text>Criador por:</Text>
                                </View>
                                <View>
                                    <Text style={[styles.bold, { fontSize: 15 }]}>{artists[0].firstname} {artists[0].surname}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.secondTitle}>Descrição:</Text>
                            <Text>Feito utilizando materiais recicláveis.</Text>
                        </View>
                        <View style={styles.contactContainer}>
                            <Text style={[styles.secondTitle, { marginBottom: 8 }]}>Orçar</Text>
                            <View style={styles.contacts}>
                                <ContactTag iconName={'whatsapp'} title={'WhatsApp'} color="#25D366" />
                                <ContactTag iconName={'envelope'} title={'E-mail'} color="darkgray" />
                                <ContactTag iconName={'phone'} title={'Telefone'} color="darkgray" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.horizontalProductsContainer}>
                        <Text style={{ marginLeft: 15, fontSize: 16 }}>Mais itens de <Text style={{ fontWeight: 700 }}>{artists[0].firstname}</Text>: </Text>
                        <ListProducts
                            products={products}
                            disposition='horizontal'
                            navigation={navigation}
                            cardBorder={true}
                        />
                    </View>
                    <View style={{
                        height: 1, backgroundColor: '#ccc', marginBottom: 20, width: '90%', alignSelf: 'center'
                    }} />
                </SafeAreaView>
                <View>
                    <Text style={{ marginLeft: 15, fontWeight: 600, fontSize: 16, paddingTop: 17 }}>Veja também: </Text>
                </View>
                <ListProducts
                    products={products}
                    navigation={navigation}
                />
            </ScrollView>
        </SafeAreaProvider >
    )
}

export default ProductScreen;