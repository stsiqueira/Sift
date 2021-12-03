
import { HStack, VStack, Image, View } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import SVGComponent from '../svgComponents/SvgComponent';

const History = (props) =>{

  

    return (
       <TouchableOpacity style={styles.historyItem}>
           <HStack>
             <View>
                <Image
                    source={{
                    uri: props.imagePath,
                    }}
                    alt="History Item Image"
                    style={{width:100, height:100}}
                />
              </View>
             <VStack px='16px' pt='24px'>
               <Text numberOfLines={2} style={[globalStyles.fontBold, {fontSize:18, marginBottom:16, flexWrap:'wrap' }]}>
                 {props.name.replaceAll('_', ' ').substring(0,25)}
                </Text>
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