
import { HStack, VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { badgeComplexObject, badgeFirstRecycling, badgeFirstScan, badgeTenScans } from '../services/BadgesImg';
import { globalStyles } from '../styles/globalStyles';
import SVGComponent from '../svgComponents/SvgComponent';

const History = () =>{

    return (
       <TouchableOpacity style={styles.historyItem}>
           <HStack>
             <SVGComponent img={badgeFirstRecycling}/>
             <VStack px='16px' pt='24px'>
               <Text style={[globalStyles.fontBold, {fontSize:18, marginBottom:16 }]}>History Title</Text>
               <HStack >
                 <Text style={styles.historyText}>Item scanned on </Text>
                 <Text style={[globalStyles.fontBold], {fontSize:14, }}>13 Oct 2021</Text>
                 <Text style={styles.historyText}> at </Text>
                 <Text style={globalStyles.historyDate}>10:13</Text>
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