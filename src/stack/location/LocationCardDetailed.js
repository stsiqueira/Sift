import React from "react";
import { HStack } from "native-base";
import {  View, Text, StyleSheet, Platform, Linking} from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { topArrowIcon  } from "../../services/Images";
import SVGComponent from "../../svgComponents/SvgComponent";
import { TouchableOpacity } from "react-native-gesture-handler";


const LocationCardDetailed = ( props ) => {
    
    const openGoogleMaps = ( Lat, Long) => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${Lat},${Long}`;
        const label = props.company;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    }
    return(
        <View style={{ flex:1, width:'100%'}}>
            <Text style={{fontSize:16,lineHeight:20, fontFamily:'Lato-Bold', marginBottom: props.moreInfo ? 16 : 8}}>{props.company}</Text>
            <HStack>
                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Address: </Text>
                <Text style={globalStyles.locationCardMoreInfo}>{props.address}</Text>
            </HStack>
            <HStack>
                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Distance: </Text>
                <Text style={globalStyles.locationCardMoreInfo}>{props.distance / 1000} km</Text>
            </HStack>
            <HStack>
                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Contact: </Text>
                <Text style={globalStyles.locationCardMoreInfo}>{props.phone}</Text>
            </HStack>
            <HStack>
                <Text style={[globalStyles.locationCardMoreInfo, {minWidth:80}]}>Directions: </Text>
                <TouchableOpacity onPress={()=> openGoogleMaps(props.lat, props.long)}>
                    <Text style={[globalStyles.locationCardMoreInfo, styles.googleMapsLink]}>Open in Google Maps</Text>
                </TouchableOpacity>
            </HStack>
            <View style={{ flexDirection:'row', width:'100%', flex:1, justifyContent:'center', paddingVertical:24, }}>
                <SVGComponent img={topArrowIcon}/>
            </View>
        </View> 
    )
}
export default LocationCardDetailed
const styles = StyleSheet.create({
    googleMapsLink:{
        fontSize:14,
        color:'#028CA1',
        textDecorationLine:'underline'
    }
  })