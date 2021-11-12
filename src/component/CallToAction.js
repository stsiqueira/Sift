import React from "react";
import { Text, TouchableOpacity, View} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import SVGComponent from "../svgComponents/SvgComponent";
import { rightArrow } from "../services/Images";
import { useNavigation } from "@react-navigation/core";



const CallToAction = ( props ) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity 
            style={globalStyles.CallToActionContainer}
            onPress={()=> navigation.navigate(props.link)}>
            <View style={globalStyles.CallToActionImageContainer}>
                <SVGComponent img={props.imageName}/>
            </View>   
            <View style={globalStyles.CallToActionTextButtonContainer}>
                <View style={globalStyles.CallToActionTextContainer}>
                    <Text style={globalStyles.CallToActionText}>{props.text}</Text>
                </View>   
                <View style={globalStyles.CallToActionButtonContainer}>
                    <SVGComponent img={rightArrow}/>
                </View>   
            </View>
        </TouchableOpacity>
    )
}
export default CallToAction
