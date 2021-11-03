import React, { useState, useEffect }from "react";  
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import Filter from "../../component/Filter";
import { globalStyles } from "../../styles/globalStyles";
import ScreenHeading from "../../subcomponents/ScreenHeading";
import SectionHeading from "../../subcomponents/SectionHeading"
import * as svgImg from '../../services/Images'
import * as GeoLocation from 'expo-location';
import getDistance from 'geolib/es/getDistance';

const Location = () => {
    const [userGeoLocation, setUserGeoLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await GeoLocation.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }

          let geolocation = await GeoLocation.getCurrentPositionAsync({});
          setUserGeoLocation(geolocation);
        })();
      }, []);


    return (
        <View style={globalStyles.screenContainer}>
            <ScrollView>
                <ScreenHeading title='Recycling centre locations' center='center'/>
                <View style={globalStyles.filtersSection}>
                    <SectionHeading title="Filters:"/>
                    <Filter 
                        title='Electronics' 
                        example='eg: TV, computer, phone'
                        imageName={svgImg.electronics}/>
                    <Filter 
                        title='Plastics' 
                        example='eg: plastic bottles'
                        imageName={svgImg.plastics}/>
                    <Filter 
                        title='Glass' 
                        example='eg: glass bottles'
                        imageName={svgImg.glass}/>
                </View>
                <Text>My lat: {userGeoLocation ? userGeoLocation.coords.latitude : " "} </Text>
                <Text>My long: {userGeoLocation? userGeoLocation.coords.longitude : " "}</Text>

                <TouchableOpacity style={{borderWidth:2, width:'40%', margin:90}}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default Location