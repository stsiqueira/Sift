import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, Text, TouchableOpacity, Button, FlatList} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import ScreenHeading from "../../subComponents/ScreenHeading";
import LocationCard from "./LocationCard";
import RClocation from "../../services/RecyclingCentres"


const LocationResult = ( props ) =>{
    const { latitude, longitude, filters } = props.route.params;
    const [ recycleCentres, setRecycleCentres ] = useState([])

    useEffect(() => {
			getLocationData()
    }, []);


	const getLocationData = () => {
		fetch("https://sift.wmdd4950.com/gqlservice", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: `
					{
						locationByCategories(categories: ${JSON.stringify(filters)}) {
							geo {
								lat
								long
							}
							location {
								id
								company
								address_1
								phone_1
								categories
							}
						}
					}
				`
			}),
		})
		.then(res => res.json())
		.then(res => {
			setRecycleCentres(res.data.locationByCategories)
		});
	}

    return (
        <View>
            <ScrollView style={{paddingVertical:30,paddingHorizontal:20}}  showsVerticalScrollIndicator={false} >
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
                        data={recycleCentres}
                        renderItem={({ item, index }) => (
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
            </ScrollView>
        </View>
)
}
export default LocationResult