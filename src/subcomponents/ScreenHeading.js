import React from "react";
import { Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const ScreenHeading = ( props ) => {
    return (
        <Text style={[globalStyles.screenHeading, { textAlign: props.center ? 'center' : 'left' } ]}>{props.title}</Text>
    )
}
export default ScreenHeading;