import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import SVGComponent from "../svgComponents/SvgComponent"
import { badgeComplexObject, badgeFirstRecycling, badgeFirstScan, badgeTenScans, 
          grayBadgeFirstScan, grayBadgeComplexObject, grayBadgeFirstRecycling, grayBadgeTenScan } from '../services/BadgesImg';

const Badge = (props) => {
    return(
            <View style={[styles.badgeContainer, {}]}>
                  <SVGComponent img={props.img}/>
                <Text style={styles.badgeName}>10th Scan</Text>
            </View>
    )
}
export default Badge

////////////////////////////////////////////////////////////////////////////
//                                STYLES                                  //
////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
      badgeContainer:{
        padding:16,
      },
      badgeName:{
        fontFamily:'Lato-Bold',
        textAlign: 'center',
        fontSize:14,
        lineHeight:20,
        paddingVertical:8,
      },
})