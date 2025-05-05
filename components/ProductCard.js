import React from 'react';
import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    product: {
        backgroundColor: 'white',
        display: 'flex',
        width: 140,
        flexDirection: 'column',
        borderRadius: 5,
        justifyContent: 'space-between'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    productImageContainer: {
        display: 'flex',
        position: 'relative'
    },
    productImage: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    productImageTag: {
        position: 'absolute',
        backgroundColor: '#807efd',
        width: '100%',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 3,
        opacity: 0.8
    },
    productImageTagText: {
        color: 'white',
        fontWeight: 600,
        fontSize: 12
    },
    productDetails: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 4,
        paddingHorizontal: 10,
        paddingBottom: 0,
        paddingTop: 8,
        height: 105
    },
    productTitle: {
        fontSize: 14,
        wordWrap: 'break-word'
    },
    productDescription: {
        fontSize: 12,
        marginBottom: 10
    },
    negotiationContainer: {
        flexDirection: 'row',
        columnGap: 4,
        paddingBottom: 10
    },
    negotiationTag: {
        backgroundColor: '#CBA4E3',
        borderRadius: 3,
        paddingHorizontal: 3,
        color: 'white',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 0.5
    },
    cardPressed: {
        opacity: 0.7
    }
});

const ProductCard = ({ object, horizontal = false, vertical = false, index = null, length = 0, trending = false, border = false, navigation }) => (
    <Pressable
        style={({ pressed }) => [
            styles.product,
            index === 0 && horizontal && { marginLeft: 10 },
            index === length - 1 && horizontal && { marginRight: 10 },
            vertical && { width: '45%' },
            pressed && styles.cardPressed
        ]}
        onPress={() => navigation.navigate('ProductScreen')}
    >
        <View style={styles.content}>
            <View style={styles.productImageContainer}>
                <Image
                    style={styles.productImage}
                    source={{ uri: object.image }}
                    resizeMode="cover"
                />
                {trending ? (
                    <View style={styles.productImageTag}>
                        <Icon name="clock-o" size={12} color="white" />
                        <Text style={styles.productImageTagText}>
                            Destaque da Semana
                        </Text>
                    </View>
                ) : (null)
                }
            </View>
            <View style={[
                styles.productDetails,
                border && { borderWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 0, borderColor: 'rgba(0,0,0,.06)' },
            ]}>
                <Text style={styles.productTitle} numberOfLines={2}>{object.name}</Text>
                <Text style={styles.productDescription} numberOfLines={1} ellipsizeMode="tail">{object.description}</Text>
                <View style={styles.negotiationContainer}>
                    <Text style={styles.negotiationTag}>B2B</Text>
                    <Text style={styles.negotiationTag}>B2C</Text>
                </View>
            </View>
        </View>
    </Pressable>
);

export default ProductCard;