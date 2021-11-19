import { HStack, Spacer, VStack } from "native-base";
import React, { useState } from "react";
import {  View, Text, StyleSheet} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import getDistance from 'geolib/es/getDistance';
import { bottomArrowIcon, topArrowIcon  } from "../../services/Images";
import SVGComponent from "../../svgComponents/SvgComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import LocationCardDetailed from "./LocationCardDetailed";
// import LaunchNavigator from 'react-native-launch-navigator';

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

                        {
                        moreInfo ?
                          <LocationCardDetailed     
                            company={props.item.location.company}
                            address={props.item.location.address_1}
                            phone={props.item.location.phone_1}
                            distance={distance}
                            moreInfo={moreInfo}
                            lat={props.item.geo.lat}
                            long={props.item.geo.long}
                            />
                        : 
                            <HStack style={{justifyContent:'space-between', width:'100%'}}>
                                <VStack>
                                    <Text style={{fontSize:16,lineHeight:20, fontFamily:'Lato-Bold', marginBottom: moreInfo ? 16 : 8}}>{props.item.location.company}</Text>
                                    <Text>{(distance / 1000).toFixed(2)} km</Text>
                                </VStack>
                                <View style={{padding:8, justifyContent: 'center'}}>
                                    <SVGComponent img={bottomArrowIcon}/>
                                </View> 
                            </HStack>
                         }
        </TouchableOpacity>
    )
}
export default LocationCard
const styles = StyleSheet.create({
    googleMapsLink:{
        fontSize:14,
        color:'#028CA1',
        textDecorationLine:'underline'
    }
  })