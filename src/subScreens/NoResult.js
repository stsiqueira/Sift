import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { CommonActions } from '@react-navigation/native';
import ItemData from '../assets/jsonData/data.json'
import { globalStyles } from '../styles/globalStyles';
import * as SecureStore from 'expo-secure-store';
import { marginBottom } from 'styled-system';
import SVGComponent from '../svgComponents/SvgComponent';
import { fallbackLogo } from '../services/Images';

const FallbackLabels = props => {

    const [labels] = useState(props.route.params.data);


    return (
        <View style={styles.fallBackContainer}>
            <View style={{ paddingTop: 64, paddingBottom: 24, alignItems: 'center' }}>
                <SVGComponent img={fallbackLogo} />
            </View>
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20, lineHeight: 24, textAlign: 'center', paddingHorizontal: 24, marginBottom: 32 }}>
                No result found for searched item.</Text>
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, lineHeight: 24, textAlign: 'center', paddingHorizontal: 24, marginBottom: 32 }}>
                Sift currently supports approx. 1000 items and we are continously expanding our database. Please check back again soon.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    fallBackContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E4E6EE',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        minHeight: '100%',
    },
    generalLabel: {
        backgroundColor: '#F3F4F8',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E4E6EE',
        flex: 1,
        padding: 16,
        marginBottom: 16,
    },
});

export default FallbackLabels;