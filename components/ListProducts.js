import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductCard from './ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    productsContainer: {
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        rowGap: 10,
        position: 'relative'
    }
});

const ListProducts = ({ products, disposition = 'vertical', cardBorder = false, navigation }) => {
    return (
        <SafeAreaView style={styles.productsContainer}>
            {
                disposition == "vertical" ?
                    <FlatList
                        data={products}
                        renderItem={({ item }) => (
                            <ProductCard
                                object={item}
                                vertical={true}
                                border={cardBorder}
                                navigation={navigation}
                                horizontal={true}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                        onEndReachedThreshold={0.5}
                    />
                    :
                    <FlatList
                        data={products}
                        renderItem={({ item, index }) => (
                            <ProductCard
                                object={item}
                                horizontal={true}
                                length={products.length}
                                index={index}
                                trending={true}
                                border={cardBorder}
                                navigation={navigation}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    />
            }
        </SafeAreaView>
    )
};

export default ListProducts