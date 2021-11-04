import React, { useState } from "react";
import { View, Text } from 'react-native'
import { globalStyles } from "../styles/globalStyles";
import { Checkbox, HStack, Spacer } from 'native-base';
import SVGComponent from "../svgComponents/SvgComponent";

const Filter = ( props) => {

    const [isSelected, setSelection] = useState(false);

    return (
        <View style={globalStyles.filtersContainer}>
            <View style={globalStyles.filterContainer}>
                <View style={globalStyles.filterImageContainer}>
                    <SVGComponent img={props.imageName} />
                </View>
                <View style={globalStyles.textContainer}>
                    <Text style={globalStyles.filterTitle}>{props.title}</Text>
                    <HStack  w='100%'> 
                        <Text style={globalStyles.filterTitle}>{props.example}</Text> 
                        <Spacer/>
                        <Checkbox 
                            value={isSelected}
                            onChange={setSelection}/>
                    </HStack>
                </View>
            </View>
        </View>
    )
}
export default Filter