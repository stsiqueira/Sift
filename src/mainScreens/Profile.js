
import { FlatList, HStack, VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { fontSize } from 'styled-system';
import { badgeComplexObject, badgeFirstRecycling, badgeFirstScan, badgeTenScans } from '../services/BadgesImg';
import { editIcon } from '../services/Images';
import { globalStyles } from '../styles/globalStyles';
import Badge from '../subComponents/Badge';
import DefaultButton from '../subComponents/Button';
import History from '../subComponents/History';
import SectionHeading from '../subComponents/SectionHeading';
import User from '../subComponents/User';
import SVGComponent from '../svgComponents/SvgComponent';


const Profile = (props) => {
  const userData = { // THIS OBJECT WILL BE DELETED ONCE WE GET DATA FROM BACKEND
    "name": "Thiago Siqueira",
    "email": "t.kriok@gmail.com",
    "badges": [ 
    {
      id:1,
      name: "1st Scan",
      image: badgeFirstScan
    },
    {
      id:2,
      name: "10th Scan",
      image: badgeTenScans
    },
    {
      id:3,
      name: "1st Location",
      image: badgeFirstRecycling
    },
    {
      id:4,
      name: "Complex Object",
      image: badgeComplexObject
    }],
    "history": [
      {
        id:1,
        name: "Banana",
        imgPath: 'https://picsum.photos/200/300',
        date: "13 Oct 2021 at 10:12am"
      },
      {
        id:2,
        name: "Banana",
        imgPath: 'https://picsum.photos/200/300',
        date: "13 Oct 2021 at 10:12am"
      },
      {
        id:3,
        name: "Banana",
        imgPath: 'https://picsum.photos/200/300',
        date: "13 Oct 2021 at 10:12am"
      }
    ]
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={{paddingVertical:30}} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal:20 }}>

          <User name={userData.name} email={userData.email}/>

          <View style={styles.badges}>
            <SectionHeading title="Badges"/>
            <View style={styles.badgesContainer}>
              {
                userData.badges ?
                  userData.badges.map((badge)=>{
                    return (
                      <Badge key={badge.id} img={badge.image} />
                    )
                  })
                :
                  <></>
              }
            </View>
          </View>

          <View style={styles.History}>
            <SectionHeading title="History"/>
            <View style={styles.historyContainer}>
              {
                userData.history ?
                  userData.history.map((history)=>{
                    return (
                      <History key={history.id} history={history}/>
                    )
                  })
                :
                  <></>
              }
            </View>
          </View>
          <View style={{paddingVertical:48, paddingHorizontal:120, marginBottom:40}}>
            <DefaultButton name='LogOut'/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Profile;

const styles = StyleSheet.create({
  badgesContainer:{
    marginTop:24,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#E4E6EE',
    borderRadius:10,
    flexDirection:'row',
    flexWrap: 'wrap',
    padding:16,
    justifyContent:'space-between',
    marginBottom:48
},
  historyContainer:{
    marginTop:16,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#E4E6EE',
    borderRadius:10,
  }
});

