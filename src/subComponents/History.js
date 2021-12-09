
import { HStack, VStack, Image, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import SVGComponent from '../svgComponents/SvgComponent';
import ItemData from '../assets/jsonData/data.json'
import { useNavigation } from "@react-navigation/core";
import { CommonActions } from '@react-navigation/native';


const History = (props) =>{ 

  const [itemData] = useState(ItemData);
  const navigation = useNavigation()

  const showInstructions = (itemName) => {
    console.log("Inside Show Instructions 5");
    const data = itemData.find(el => el.name === itemName);    
    if (data) {
      const id = data.id;
      // const encd64Image = "";
      //   console.log("image Path->", props.imagePath);
      //   fetch(props.imagePath)
      //       .then(response => { console.log("imageresponse->", response)
      //     });
            
      navigation.dispatch({
        ...CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "Search",
              state: {
                routes: [
                  {
                    name: "ScanResult",
                    params: {
                      searchID: id,
                      data: data
                    }
                  }
                ]
              }
            }
          ]
        })
      });
    } 
  }

    return (
       <TouchableOpacity style={styles.historyItem} onPress={() => showInstructions(props.name)}>
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
                 {props.name.length >25 ? `${props.name.substring(0,25)}...`: props.name.substring(0,25)}
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