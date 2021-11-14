import React, { useState, useEffect }from "react";  
import { Image, ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import Filter from "../../component/Filter";
import { globalStyles } from "../../styles/globalStyles";
import ScreenHeading from "../../subComponents/ScreenHeading";
import * as svgImg from '../../services/Images'
import * as GeoLocation from 'expo-location';
import getDistance from 'geolib/es/getDistance';
import { searchInput } from '../../services/Images'
import SVGComponent from "../../svgComponents/SvgComponent";
import { Center, Spacer } from "native-base";

const Location = ( props ) => {
    const [userGeoLocation, setUserGeoLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [inputLocation, setInputLocation ] = useState()
    const [filters, setFilters] = useState([])

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

    const HandleSearch = () => {
        props.navigation.navigate('LocationResult', {
            latitude:userGeoLocation.coords.latitude,
            longitude:userGeoLocation.coords.longitude,
            filters: filters
        })
    }

    const handleSelect = (filterName) => {
        filters.includes(filterName) ?
            setFilters(filters.filter(filter => filter !== filterName))
        : filters.push(filterName)
    }

    return (
        <View  >
            <ScrollView style={{paddingVertical:30,paddingHorizontal:20}}  showsVerticalScrollIndicator={false} >
                <ScreenHeading title='Recycling centre locations' center='center'/>
                <View style={globalStyles.filtersSection}>
                <Text style={{ fontFamily:'Lato-Bold',
                            fontSize:18,
                            lineHeight:26}}> Filters:</Text>
                    <Filter 
                        title='Electronics' 
                        example='eg: TV, computer, phone'
                        imageName={svgImg.electronics}
                        handleSelect={handleSelect}
                    />
                    <Filter 
                        title='Plastics' 
                        example='eg: plastic bottles'
                        imageName={svgImg.plastics}
                        handleSelect={handleSelect} />
                    <Filter 
                        title='Glass' 
                        example='eg: glass bottles'
                        imageName={svgImg.glass}
                        handleSelect={handleSelect} />
                </View>

                <View style={globalStyles.searchInputContainer}>
                        <SVGComponent img={searchInput}/>
                        <TextInput
                            onChangeText={text => {
                            }}
                            onFocus={() => {
                            }}
                            onBlur={() => {
                            }}
                            inputFocused={true}
                            value={inputLocation}
                            autoCompleteType={'off'}
                            placeholder='Search by address'
                            style={globalStyles.searchInputText}
                            placeholderTextColor={'#000000'}
                        />
                </View>
                <Center>
                    <TouchableOpacity style={globalStyles.button} onPress={()=> HandleSearch()}>
                        <Text style={{color:'white', fontSize:16, fontFamily:'Lato-Bold'}}>Search</Text>
                    </TouchableOpacity>
                </Center>

            </ScrollView>
        </View>
    )
}
export default Location
