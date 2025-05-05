import React, {useEffect} from 'react';
import { Image, StyleSheet, View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import CustomMainHeader from '../components/Header';
import products from '../mock/products.json';
import artists from '../mock/artist.json';
import ListProducts from '../components/ListProducts'
import ProductCard from '../components/ProductCard'
import { LogBox } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 5
    },
    textContainer: {
        width: '95%',
        alignSelf: 'center',
        position: 'relative'
    },
    content: {
        width: '70%',
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: 'red'
    },
    header: {
        width: '100%',
        display: 'flexbox',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        height: 140
    },
    headerContainer: {
        paddingLeft: 25,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 1
    },
    announcingTitle: {
        flexDirection: 'row',
        columnGap: 6,
        justifyContent: 'left'
    },
    headerBG: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -999
    },
    headerTextTitle: {
        fontFamily: 'Segoe UI',
        fontSize: 18,
        fontWeight: 900,
        color: 'white',
    },
    headerTextBody: {
        fontFamily: 'Segoe UI',
        fontSize: 14,
        fontWeight: 500,
        color: 'white',
        maxWidth: 200,
        lineHeight: 22
    },
    secondTitle: {
        fontWeight: 600,
        fontSize: 16,
        paddingVertical: 10,
        marginLeft: 5
    },
    productsContainer: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        rowGap: 10,
        position: 'relative'
    },
    artistsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 15
    },
    artist: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 8,
        alignItems: 'center'
    },
    artistImage: {
        width: 100,
        height: 100,
        borderRadius: 100
    }, mainProductsContainer: {
        backgroundColor: ''
    },
    floatTag: {
        backgroundColor: 'green',
        display: 'flex',
        position: 'relative',
        width: '100%',
    },
    floatTagBg: {
        flex: 1,
        width: '100%',
        height: "100%",
        position: 'absolute'
    },
    floatTagText: {
        paddingVertical: 6,
        marginLeft: 15,
        alignSelf: 'left',
        color: 'white',
        fontSize: 16
    }
});

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    return (
        <SafeAreaProvider>
            <ScrollView>
                <CustomMainHeader
                    hasLogo={true}
                    icons={[
                        { name: 'magnify', onPress: () => null },
                        { name: 'package-variant-closed', onPress: () => navigation.navigate("LoginScreen") },
                        { name: 'account-circle', onPress: () => navigation.navigate("LoginScreen") }
                    ]}
                />
                <SafeAreaView style={styles.mainContainer}>
                    <View style={styles.header}>
                        <View style={styles.headerContainer}>
                            <View style={styles.announcingTitle}>
                                <Icon name="star" size={20} color="white" />
                                <Text style={styles.headerTextTitle}>
                                    BIJUS EXCLUSIVOS
                                </Text>
                            </View>
                            <View style={styles.announcingBody}>
                                <Text style={styles.headerTextBody}>
                                    Encontre os produtos prefeitos para este outono.
                                </Text>
                            </View>
                        </View>
                        <Image
                            style={styles.headerBG}
                            source={require('../assets/images/headerBG.jpg')}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text style={styles.secondTitle}>
                                ÚLTIMOS PRODUTOS
                            </Text>
                        </View >
                        <View style={styles.productsContainer}>
                            <ListProducts
                                disposition='horizontal'
                                products={products}
                                navigation={navigation}
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <Text style={styles.secondTitle}>
                                ARTISTAS EM ASCENÇÃO
                            </Text>
                        </View >
                        <View style={styles.artistsContainer}>
                            {artists.slice(0, 3).map((artist, index) => (
                                <TouchableOpacity key={index} style={styles.artist} onPress={() => navigation.navigate('ProfileScreen')}>
                                    <Image
                                        style={styles.artistImage}
                                        source={{ uri: artist.pfp }} 
                                        resizeMode="cover"
                                    />
                                    <Text style={styles.artistName}>
                                        <Text style={{ fontWeight: '600' }}>{artist.firstname} </Text>
                                        {artist.surname}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View style={[styles.container, {backgroundColor: '#F2F2F2'}]}>
                        <View style={styles.floatTag}>
                            <LinearGradient
                                colors={['#B367E5', '#CBA4E3']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.floatTagBg}
                            />
                            <Text style={[styles.secondTitle, styles.floatTagText]}>
                                PRODUTOS DO DIA
                            </Text>
                        </View>
                        <View style={styles.mainProductsContainer}>
                            <ListProducts
                                products={products}
                                navigation={navigation}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaProvider >
    )
}

export default HomeScreen;