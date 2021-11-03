import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import { globalStyles } from "../styles/globalStyles";
import SVGComponent from "../svgComponents/SvgComponent";

const CallToAction = ( props ) => {
    // console.log("calltoAction ==========", props.imageName)
    return (
        <TouchableOpacity style={globalStyles.CallToActionContainer}>
            <View style={globalStyles.CallToActionImageContainer}>
                <SVGComponent img={props.imageName}/>
            </View>   
            <View style={globalStyles.CallToActionTextButtonContainer}>
                <View style={globalStyles.CallToActionTextContainer}>
                    <Text style={globalStyles.CallToActionText}>{props.text}</Text>
                </View>   
                <View style={globalStyles.CallToActionButtonContainer}>
                    <Image 
                        style={globalStyles.image}
                        source={require('../assets/images/CallToActionRigthArrow.png')} />
                </View>   
            </View>
        </TouchableOpacity>
    )
}
export default CallToAction
