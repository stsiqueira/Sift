import React from 'react';
import { ScrollView, View } from 'react-native';
import CallToAction from '../component/CallToAction';
import CarouselCards from '../component/CarouselCards';
import { globalStyles } from '../styles/globalStyles';
import ScreenHeading from '../subComponents/ScreenHeading'
import SectionHeading from '../subComponents/SectionHeading';
import { CallToActionSearch, CallToActionLocation, PromotionRecycling } from '../services/Images'
import { getData, storeData } from '../services/SpecialFunctions';

const features = [{text:'Sift can identify different materials and tell you how to properly dispose of them!', imageName:'CallToActionSearch.png' },
                  {text:'Want to know where are the nearest Recycling Center Location? Sift can help you!', imageName:'CallToActionLocation.png'}]
const promotions = [{text:'Take your cans to Regional Recycling this weekend and receive extra 20% on your refund!', imageName:'PromotionLocationCentre.png' }]

const Home = (props) => {




  
  return (
    <View style={globalStyles.screenContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical:30}}>
          <View style={{paddingHorizontal:20}}>
            <View style={globalStyles.screenHeadingWrapper}>
              <ScreenHeading title='Welcome to Sift'/>
            </View>
            <View style={globalStyles.callToActionWrapper}>
              <CallToAction 
                text='Sift can identify different materials and tell you how to properly dispose of them!'
                imageName={CallToActionSearch}
                link='Search'
                />

              <CallToAction 
                text='Want to know where are the nearest Recycling Center Location? Sift can help you!'
                imageName={CallToActionLocation}
                link='Depots'
                />
            </View>


            <View style={globalStyles.promotionSectionWrapper}>
              <SectionHeading title='Promotion'/>
              <CallToAction 
                text={promotions[0].text}
                imageName={PromotionRecycling}
                link='Home'
                />
            </View>
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

