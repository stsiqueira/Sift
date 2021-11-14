
import { HStack, VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { badgeComplexObject, badgeFirstRecycling, badgeFirstScan, badgeTenScans } from '../services/BadgesImg';
import { globalStyles } from '../styles/globalStyles';
import SVGComponent from '../svgComponents/SvgComponent';

const History = (props) =>{

    return (
       <TouchableOpacity style={styles.historyItem}>
           <HStack>
             <SVGComponent img={badgeFirstRecycling}/>
             <VStack px='16px' pt='24px'>
               <Text style={[globalStyles.fontBold, {fontSize:18, marginBottom:16 }]}>{props.name}</Text>
                 <Text style={styles.historyText}>Item was scanned on </Text>
               <HStack >
                 <Text style={[globalStyles.fontBold, {fontSize:14, }]}>{props.date}</Text>
                 <Text style={styles.historyText}> at </Text>
                 <Text style={[globalStyles.fontBold, {fontSize:14, }]}>{props.time}</Text>
               </HStack>
             </VStack>
           </HStack>
       </TouchableOpacity>
    )
}
export default History

const styles = StyleSheet.create({
  historyItem:{
    paddingHorizontal:16,
    paddingVertical:24,

  }
});