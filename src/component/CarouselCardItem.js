import React from 'react'
import { View, StyleSheet, Dimensions, Image } from "react-native"
import Aluminum from '../assets/images/carousel/Aluminum.png'
import Grass from '../assets/images/carousel/Grass.png'
import Light from '../assets/images/carousel/Light.png'

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.65)

const CarouselCardItem = ({ item, index }) => {

  // const test= '../assets/images/carousel/Aluminum.png'
  // console.log(test, item.imgPath)
  // console.log("index->", item)

  return (
    <View style={styles.container} key={index}>

      <Image
        source={Aluminum}
        style={styles.image}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: ITEM_WIDTH,
    padding: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    borderRadius:10,
    resizeMode:'contain'
    
  },

})

export default CarouselCardItem