import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomMainHeader from '../components/Header';
import products from '../mock/products.json';
import artists from '../mock/artist.json';
import ListProducts from '../components/ListProducts';
import ContactTag from '@/components/ContactTag';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5
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
    profileContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 20,
        paddingVertical: 22
    },
    pfpImage: {
        width: 160,
        height: 160,
        borderRadius: 200
    },
    pfpName: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    pfpNameFontSize: {
        fontSize: 20
    },
    seeMore: {
        alignSelf: 'center',
        fontSize: 16,
        color: "#6A91F4",
        paddingVertical: 15,
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center'
    }
});

const ProfileScreen = ({ navigation }) => (
    <SafeAreaProvider>
        <ScrollView>
            <CustomMainHeader
                navigation={navigation}
                showChevron={true}
                hasLogo={true}
                icons={[
                    { name: 'package-variant-closed', onPress: () => navigation.navigate('LoginScreen') },
                    { name: 'account-circle', onPress: () => navigation.navigate('LoginScreen') }
                ]}
            />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.pfpImage}
                        source={{ uri: artists[0].pfp }}
                        resizeMode='cover'
                    />
                    <View style={styles.pfpName}>
                        <Text style={styles.pfpNameFontSize}>{artists[0].firstname}</Text>
                        <Text style={[styles.bold, styles.pfpNameFontSize]}>{artists[0].surname}</Text>
                    </View>
                    <View style={styles.contactContainer}>
                        <View style={styles.contacts}>
                            <ContactTag iconName={'whatsapp'} title={'WhatsApp'} color="#25D366" />
                            <ContactTag iconName={'envelope'} title={'E-mail'} color="darkgray" />
                            <ContactTag iconName={'phone'} title={'Telefone'} color="darkgray" />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <View>
                <ListProducts
                    products={products}
                    navigation={navigation}
                />
                <TouchableOpacity onPress={() => {navigation.navigate('ProfileProductsScreen')}}>
                    <Text style={styles.seeMore}>
                        Ver todos
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaProvider >
)

export default ProfileScreen;