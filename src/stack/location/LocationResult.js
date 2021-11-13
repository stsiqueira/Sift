import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, Text, TouchableOpacity, Button, FlatList} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import ScreenHeading from "../../subComponents/ScreenHeading";
import SectionHeading from "../../subComponents/SectionHeading";
import LocationCard from "./LocationCard";
import RClocation from "../../services/RecyclingCentres"


const LocationResult = ( props ) =>{
    const { latitude, longitude, filters } = props.route.params;
    const [ recycleCentres, setRecycleCentres ] = useState([])

    useEffect(() => {
        (() => {
            console.log("filters->", filters)
            const res = RClocation.data.results.locations.filter(item => {
                item.location.categories.includes(filters)
            });
            console.log(res)
        })();

    }, []);
      console.log(RClocation.data.results.locations.categories)
    return (
        <View style={globalStyles.screenContainer}>
            <ScrollView>
                <ScreenHeading title='Recycling centre locations' center='center'/>
                <View style={globalStyles.filtersSection}>
                    <View style={{flexDirection:'row', alignItems:'baseline'}}> 
                    <Text style={{ fontFamily:'Lato-Bold',
                            fontSize:18,
                            lineHeight:26}}> Filters:</Text>
                        {
                        filters.map((filter)=>(
                            <Text style={{ fontFamily:'Lato-Regular',
                            fontSize:18,
                            lineHeight:26}}> {filter} </Text>
                            ))
                        }
                    </View>
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