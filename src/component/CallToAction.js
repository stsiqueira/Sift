import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const CallToAction = ( props ) => {
    const image = `../assets/images/${props.imageName}`;
    console.log(image)
    return (
        <TouchableOpacity style={globalStyles.CallToActionContainer}>
            <View style={globalStyles.CallToActionImageContainer}>
                    <Image 
                        style={globalStyles.image}
                        source={require('../assets/images/CallToActionSearch.png')} />
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
