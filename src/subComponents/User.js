import { HStack } from "native-base"
import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { editIcon } from "../services/Images"
import SVGComponent from "../svgComponents/SvgComponent"
import SectionHeading from "./SectionHeading"


const User = (props) => {

    return(
        <View style={{paddingBottom:24}}>
            <HStack style={{justifyContent:"space-between"}}>
                <View style={{paddingBottom:8}}>
                    <SectionHeading title={props.name}/>
                </View>
                <View style={{paddingTop:8}}>
                    <SVGComponent img={editIcon}/>
                </View>
            </HStack>
            <View style={styles.profileEmail}>
                <Text style={{fontFamily:'Lato-Regular', fontSize:14, color:'#929090'}}>{props.email}</Text>
            </View>
        </View>
    )
}
export default User

const styles = StyleSheet.create({

})