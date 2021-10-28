import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import CallToAction from '../component/CallToAction';
import CarouselCards from '../component/CarouselCards';
import { globalStyles } from '../styles/globalStyles';
import ScreenHeading from '../subcomponents/ScreenHeading';
import SectionHeading from '../subcomponents/SectionHeading';

const features = [{text:'Sift can identify different materials and tell you how to properly dispose of them!', imageName:'CallToActionSearch.png' },
                  {text:'Want to know where are the nearest Recycling Center Location? Sift can help you!', imageName:'CallToActionLocation.png'}]
const promotions = [{text:'Take your cans to Regional Recycling this weekend and receive extra 20% on your refund!', imageName:'PromotionLocationCentre.png' }]


const Home = (props) => {

  return (
    <View style={globalStyles.screenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.screenHeadingWrapper}>
            <ScreenHeading title='Welcome to Sift'/>
          </View>
          <View style={globalStyles.callToActionWrapper}>
            <CallToAction 
              text='Sift can identify different materials and tell you how to properly dispose of them!'
              imageName='CallToActionSearch.png'/>

            <CallToAction 
              text='Want to know where are the nearest Recycling Center Location? Sift can help you!'
              imageName='CallToActionLocation.png'/>
          </View>


          <View style={globalStyles.promotionSectionWrapper}>
            <SectionHeading title='Promotion'/>
            <CallToAction 
              text={promotions[0].text}
              imageName={promotions[0].imageName}/>
          </View>

          <View style={globalStyles.carousel}>
            <SectionHeading title='Did you Know?' center='center'/>
            <CarouselCards/>
          </View>

      </ScrollView >
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    paddingHorizontal:20,
    paddingVertical:30,
  },

  title:{
    fontSize:30,
    fontWeight: 'bold',
    paddingVertical:15
  },
  badges:{
    width:'100%',
    marginVertical:20
  },
  image:{
    width:'100%',
  },
  buttonContainer:{
    alignItems:'center'
  },
  button:{
    backgroundColor:'black',
    borderRadius:100,
    paddingHorizontal:32,
    paddingVertical:16
  },
  buttonText:{
    color:'white',
    fontSize:16,
  },
  textContainer:{
    paddingVertical:15,
  },

});

