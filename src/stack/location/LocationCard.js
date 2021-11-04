import { HStack, Spacer, VStack } from "native-base";
import React, { useState } from "react";
import {  View, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import getDistance from 'geolib/es/getDistance';
import { rightArrowIcon } from "../../services/Images";
import SVGComponent from "../../svgComponents/SvgComponent";

const LocationCard = ( props ) => {

    const [ distance, setDistance ] = useState( getDistance(
        { latitude: props.item.geo.lat, longitude: props.item.geo.long },
        { latitude: props.userLat, longitude: props.userLong }
      ))

    return(
        <View style={globalStyles.locationCard}>
            <HStack >
                <VStack>
                    <Text style={{fontFamily:'Lato-bold', fontSize:14,}}>{props.item.location.company}</Text>
                    <Text>{distance / 1000} km</Text>
                </VStack>
                <Spacer/> 
                <View style={{padding:8}}>
                <SVGComponent img={rightArrowIcon}/>
                    </View> 

            </HStack>
        </View>
    )
}
export default LocationCard