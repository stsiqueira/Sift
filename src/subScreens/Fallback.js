import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { CommonActions } from '@react-navigation/native';
import ItemData from '../assets/jsonData/data.json'
import { globalStyles } from '../styles/globalStyles';
import Oops from '../subComponents/Oops';
import * as SecureStore from 'expo-secure-store';
import { uploadtoS3 } from '../services/ProfileServices'
import { updateHistory, updateBadge } from '../services/ProfileServices'

const FallbackLabels = props => {

    const [labels] = useState(props.route.params.data);
    const [b64Image] = useState(props.route.params.searchImage);
    const [itemData] = useState(ItemData);
    const navigation = useNavigation()

    const showInstructions = (name) => {

        const data = itemData.find(el => el.name === name);
        if (data) {
            console.log("Inside Show Instructions 2");
            //POST data on HISTORY
            SecureStore.getItemAsync("g-user").then((result) => {
                console.log("g-user resolved")
                let response = JSON.parse(result)
                if (response.user && response.user.email) {
                    //Send file to S3 here
                        uploadtoS3(b64Image).then((responseImagePath) => {
                            console.log("Image Service response->", responseImagePath); //Get public S3 image path in response                       
                    //Write history
                        updateHistory(response.user.email, name, responseImagePath);
                    
                    //Update Badge Status
                        updateBadge(response.user.email, 1, true);

                    if(name == "Cup with plastic lid and paper sleeve" || name == "Glass bottle with plastic lid"){
                        updateBadge(response.user.email, 4, true);
                    }
                    });

                }
            });


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
        <View  >
            <ScrollView
                style={{ paddingVertical: 30, paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false} >
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
                                    key={item => item.id}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )
                        :
                        <Oops />
                }
            </ScrollView>
        </View>
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