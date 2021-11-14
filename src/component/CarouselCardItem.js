import React from 'react'
import { View, StyleSheet, Dimensions } from "react-native"
import SVGComponent from '../svgComponents/SvgComponent'

export const SLIDER_WIDTH = Dimensions.get('window').width + 10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.65)


const CarouselCardItem = ({ item, index }) => {

  return (
    <View style={styles.container} key={index}>
      <View style={{resizeMode:'contain'}}>
        <SVGComponent img={item.imgPath}/>
      </View>
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
      width: 8,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 7,
  },

})

export default CarouselCardItem