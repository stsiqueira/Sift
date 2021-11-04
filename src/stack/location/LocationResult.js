import React, { useEffect } from "react";
import { Image, ScrollView, View, Text, TouchableOpacity, Button, FlatList} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import ScreenHeading from "../../subcomponents/ScreenHeading";
import SectionHeading from "../../subcomponents/SectionHeading"
import LocationCard from "./LocationCard";
import RClocation from "../../services/RecyclingCentres"

const LocationResult = ( props ) =>{
    const { latitude, longitude } = props.route.params;

    return (
        <View style={globalStyles.screenContainer}>
            <ScrollView>
                <ScreenHeading title='Recycling centre locations' center='center'/>
                <View style={globalStyles.filtersSection}>
                    <SectionHeading title="Filters:"/>

                </View>
                <View>
                    <FlatList 
                        data={RClocation.data.results.locations}
                        renderItem={({ item }) => (
                            <LocationCard 
                                item={item} 
                                id={item.id}
                                userLat={latitude}
                                userLong={longitude}
                            />
                        )}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                    </View>
                <Button title="Go back" onPress={() => props.navigation.goBack()} />
            </ScrollView>
        </View>
)
}
export default LocationResult