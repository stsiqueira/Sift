import { useNavigation } from "@react-navigation/core";
import { HStack } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { oopsLogo } from "../services/Images";
import { globalStyles } from "../styles/globalStyles";
import SVGComponent from "../svgComponents/SvgComponent";

const Oops = ()=>{
    const [tips, ] = useState([
        "Try to use better lighting", 
        "Hold an object in front of plain background", 
        "Make sure your camera is clean"])

    const navigation = useNavigation()

    const HandleSearch = () => {
        navigation.dispatch({
            ...CommonActions.reset({
                index: 0,
                routes: [
                    { name: "Search" }
                ]
            })
        });
    }
    return (
        <View style={styles.information}>
            <SVGComponent img={oopsLogo}/>
            <Text style={{fontFamily:'Lato-Bold', fontSize:36, lineHeight:40,paddingTop:24, paddingBottom:51}}>Oops</Text>
            <View style={styles.grayBox}>
                <Text style={{fontFamily:'Lato-Bold',fontSize:14,lineHeight:20, paddingBottom:16 }}>Scan Tips:</Text>
                {
                    tips.map(item =>(
                        <Text style={{fontFamily:'Lato-Bold', fontSize:14, lineHeight:20, paddingLeft:8,}}>{'\u2022'}
                            <Text style={{ fontFamily:'Lato-Regular'}}>  {item}</Text>
                        </Text>
                    ))
                }
            </View>
            <View style={[styles.grayBox,{marginTop:24, marginBottom:32}]}>
                <HStack>
                    <Text style={{fontFamily:'Lato-LightItalic',fontSize:14,lineHeight:16, }}>
                        <Text style={{fontFamily:'Lato-Bold'}}>Note:</Text> If the Scan functionality is not working it might be that we do not have this object in our database. In these cases we suggest you use the search feature, to search by word.
                    </Text>
                    
                </HStack>
            </View>

            <TouchableOpacity
                style={globalStyles.button} 
                onPress={()=> HandleSearch()}>
                <Text style={{color:'white', fontSize:16, fontFamily:'Lato-Bold'}}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Oops
const styles = StyleSheet.create({
    information: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#E4E6EE',
        borderRadius:10,
        paddingVertical:56,
        paddingHorizontal:16
    },
    grayBox:{
        backgroundColor:'#F3F4F8',
        paddingVertical:16,
        paddingHorizontal:8,
        width:'100%'
    },
});