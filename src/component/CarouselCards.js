import React from 'react'
import { StyleSheet, SafeAreaView} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  const carouselImages = [
    {
      id:1,
      imgPath: '../assets/images/carousel/Aluminum.png'
    },
    {
      id:2,
      imgPath: 'Grass'
    },
    {
      id:3,
      imgPath: 'Light'
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={carouselImages}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={carouselImages.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 24,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#9BD8DE'
        }}
        inactiveDotOpacity={1}
        inactiveDotStyle={{
          width: 16,
          height: 16,
          borderRadius: 8,
          backgroundColor: '#0398A8'
        }}
        tappableDots={true}
      />
   </SafeAreaView>
  )
}


export default CarouselCards
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginTop:12,
    marginBottom:50,
  },
});