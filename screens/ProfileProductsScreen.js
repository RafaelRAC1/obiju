import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
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
    title: {
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 15,
        paddingVertical: 5,
        textTransform: 'uppercase'
    }
});

const ProfileProductsScreen = ({ navigation }) => (
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
                <View style={{paddingTop: 20}}>
                    <Text style={styles.title}>TODOS ITENS DE {artists[0].firstname}</Text>
                    <ListProducts
                        disposition='vertical'
                        products={products}
                        cardBorder={true}
                        navigation={navigation}
                        horizontal={false}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    </SafeAreaProvider >
)

export default ProfileProductsScreen;