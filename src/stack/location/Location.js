import React, { useState, useEffect }from "react";  
import { Image, ScrollView, View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Filter from "../../component/Filter";
import { globalStyles } from "../../styles/globalStyles";
import ScreenHeading from "../../subComponents/ScreenHeading";
import * as svgImg from '../../services/Images'
import * as GeoLocation from 'expo-location';
import getDistance from 'geolib/es/getDistance';
import { searchInput } from '../../services/Images'
import SVGComponent from "../../svgComponents/SvgComponent";
import { Center, Spacer } from "native-base";
import AutoCompleteInput from "react-native-tomtom-autocomplete";

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
            latitude: userGeoLocation ? userGeoLocation.coords.latitude : "49.2248",
            longitude: userGeoLocation ? userGeoLocation.coords.longitude :  "123.1085" ,
            filters: filters
        })
    }

    const handleSelect = (filterName) => {
        filters.includes(filterName) ?
            setFilters(filters.filter(filter => filter !== filterName))
        : filters.push(filterName)
    }
// const tomtomApiKey = "lDNGOihuwicB9jy3du63gNr5gUGwCAZC";
const tomtomApiKey = "ctMg0rMDauN3jPf1SOHXHVJNpJnhmGaS";
// let tomtomApiKey = "XOeleMUFVN4TaGSAJwKm8y7IBfy7YeQA";
// let tomtomApiKey = "btLyAfWjgUeCnADorxtv6lVysyov8M0l";

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
                        <View style={[globalStyles.searchInputContainer,{marginTop:0}]}>
                                <SVGComponent img={searchInput}/>
                                <View style={{ flex:1, paddingHorizontal:16,}}> 
                                    <AutoCompleteInput
                                        inputProps={{
                                            placeholder: 'Search by address or postal code',
                                        }}
                                        onPress={(item) => console.log('item', item)}
                                        inputContainerStyle={{
                                            padding: 10,
                                            width:'100%',
                                        }}
                                        listItemsContainerStyle={{
                                            borderBottomWidth: 1,
                                            borderBottomColor: "#E4E6EE;",
                                            maxWidth:280,
                                        }}
                                        bottomDivider
                                        tomtomOptions={{ key: tomtomApiKey }}
                                        />
                                </View>
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
const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		flex: 1,
		maxHeight: '100%',
	},})