import React, { useState } from "react";
import { View, Text } from 'react-native'
import { globalStyles } from "../styles/globalStyles";
import { Checkbox, HStack, Spacer } from 'native-base';
import SVGComponent from "../svgComponents/SvgComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

const Filter = ( props) => {

    const [isSelected, setSelection] = useState(true);



    return (
        <View 
            style={globalStyles.filtersContainer}
            >
            <View style={globalStyles.filterContainer}>
                <View style={globalStyles.filterImageContainer}>
                    <SVGComponent img={props.imageName} />
                </View>
                <View style={globalStyles.textContainer}>
                    <Text style={{fontFamily:'Lato-Bold', fontSize:18, lineHeight:24,marginBottom:16}}>{props.title}</Text>
                    <HStack  w='100%'> 
                        <Text style={{ fontSize:14,}}>{props.example}</Text> 

                    </HStack>
                </View>
                <View style={{justifyContent:'center', paddingRight:24}}>
                        <Checkbox 
                            value={isSelected}
                            onChange={()=>props.handleSelect(props.title)}
                            accessibilityLabel={`${props.title}`}
                            />
                </View>
            </View>
        </View>
    )
}
export default Filter