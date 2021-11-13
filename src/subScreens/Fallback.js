import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { CommonActions } from '@react-navigation/native';
import ItemData from '../assets/jsonData/data.json'

const FallbackLabels = props => {

    const [labels] = useState(props.route.params.data);
    const [b64Image] = useState(props.route.params.searchImage);
    const [itemData] = useState(ItemData);
    const navigation = useNavigation()

    const HandleSearch = () => {
        navigation.dispatch({
            ...CommonActions.reset({
                index: 0,
                routes: [
                    { name: "Search" }
                ]
            })
        });
    }

    const showInstructions = (name) => {

        const data = itemData.find(el => el.name === name);
        if (data) {

            //POST data on HISTORY **CODE**
            let image = b64Image;

            navigation.dispatch({
                ...CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: "Search",
                            state: {
                                routes: [
                                    {
                                        name: "ScanResult",
                                        params: {
                                            searchID: data.id,
                                            data: data,
                                            pageType: "image",
                                            searchImage: b64Image,
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                })
            });

        } else { // no results was found for the searched keyword 
        }
    }

    return (
        <>
            <ScrollView>
                {
                    labels.length > 0 ?
                        (
                            <View>
                                <Text>In order to show you the most relevant results, please select the closest match to the item scanned.</Text>
                                <FlatList
                                    data={labels}
                                    renderItem={({ item, index }) => {
                                        console.log("item is", item);

                                        return (
                                            <View key={labels.indexOf(item) + 1} style={{ flexDirection: "row" }}>
                                                <View>
                                                    <TouchableOpacity onPress={() => showInstructions(item)}>
                                                        <Text> {item} </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )
                        :
                        <View style={styles.information}>
                            <Text>Sorry, we do not recognize this item. Try capturing again or</Text>
                            <TouchableOpacity onPress={() => HandleSearch()}>
                                <Text>Search</Text>
                            </TouchableOpacity>
                        </View>

                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    information: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default FallbackLabels;