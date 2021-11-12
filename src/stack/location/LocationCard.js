import { HStack, Spacer, VStack } from "native-base";
import React, { useState } from "react";
import {  View, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import getDistance from 'geolib/es/getDistance';
import { bottomArrowIcon  } from "../../services/Images";
import SVGComponent from "../../svgComponents/SvgComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

const LocationCard = ( props ) => {
    const [moreInfo, setMoreInfo] = useState(false)

    const [ distance, setDistance ] = useState( getDistance(
        { latitude: props.item.geo.lat, longitude: props.item.geo.long },
        { latitude: props.userLat, longitude: props.userLong }
      ))

    return(
        <TouchableOpacity 
            style={globalStyles.locationCard}
            onPress={() => setMoreInfo(!moreInfo)}>
            <VStack>
                <HStack >
                    <VStack>
                        <Text style={{fontSize:16,lineHeight:20, fontFamily:'Lato-Bold', marginBottom: moreInfo ? 16 : 8}}>{props.item.location.company}</Text>
                        {
                        moreInfo ?
                           <>
                            <HStack>
                                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Address: </Text>
                                <Text style={globalStyles.locationCardMoreInfo}>{props.item.location.address_1}</Text>
                            </HStack>
                            <HStack>
                                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Distance: </Text>
                                <Text style={globalStyles.locationCardMoreInfo}>{distance / 1000} km</Text>
                            </HStack>
                            <HStack>
                                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Contact: </Text>
                                <Text style={globalStyles.locationCardMoreInfo}>{props.item.location.phone_1}</Text>
                            </HStack>
                            <HStack>
                                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Directions: </Text>
                                <Text style={globalStyles.locationCardMoreInfo}>ADDLINK</Text>
                            </HStack>
                           </> 
                        : 
                            <Text>{distance / 1000} km</Text>
                         }
                    </VStack>
                    <Spacer/> 
                    <View style={{padding:8, justifyContent: 'center'}}>
                        <SVGComponent img={bottomArrowIcon}/>
                    </View> 
                </HStack>

            </VStack>
        </TouchableOpacity>
    )
}
export default LocationCard