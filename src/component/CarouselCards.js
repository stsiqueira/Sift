import React from 'react'
import { StyleSheet, SafeAreaView} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
// import a from '../assets/images/carousel/'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  const carouselImages = [
    {
      id:1,
      imgUrl: "https://picsum.photos/id/11/200/300"
    },
    {
      id:2,
      imgUrl: "https://picsum.photos/id/10/200/300"
    },
    {
      id:3,
      imgUrl: "https://picsum.photos/id/12/200/300"
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
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#0398A8'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
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
  },
});