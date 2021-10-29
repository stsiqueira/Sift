import React from "react";
import { Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const SectionHeading = ( props ) => {
    return (
        <Text style={ [globalStyles.sectionHeading, { textAlign: props.center ? 'center' : 'left' } ] }>{props.title}</Text>
    )
}
export default SectionHeading;