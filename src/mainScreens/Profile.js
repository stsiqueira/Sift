
import { Center, FlatList, HStack, VStack } from 'native-base';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { fontSize } from 'styled-system';
import Login from '../mainScreens/login';
import {
  badgeComplexObject, badgeFirstRecycling, badgeFirstScan, badgeTenScans,
  grayBadgeFirstScan, grayBadgeComplexObject, grayBadgeFirstRecycling, grayBadgeTenScan, noHistory
} from '../services/BadgesImg';

import { editIcon } from '../services/Images';
import { globalStyles } from '../styles/globalStyles';
import Badge from '../subComponents/Badge';
import History from '../subComponents/History';
import SectionHeading from '../subComponents/SectionHeading';
import User from '../subComponents/User';
import SVGComponent from '../svgComponents/SvgComponent';
import { getProfile, updateName } from '../services/ProfileServices'
import * as SecureStore from 'expo-secure-store';

const Profile = (props) => {
  // const userData = { // THIS OBJECT WILL BE DELETED ONCE WE GET DATA FROM BACKEND
  //   "name": "Thiago Siqueira",
  //   "email": "t.kriok@gmail.com",
  //   "badges": [ 
  //   {
  //     id:1,
  //     name: "1st Scan",
  //     image: grayBadgeFirstScan
  //   },
  //   {
  //     id:2,
  //     name: "10th Scan",
  //     image: badgeTenScans
  //   },
  //   {
  //     id:3,
  //     name: "1st Location",
  //     image: badgeFirstRecycling
  //   },
  //   {
  //     id:4,
  //     name: "Complex Object",
  //     image: badgeComplexObject
  //   }],
  //   "history": [
  //     {
  //       id:1,
  //       name: "Banana",
  //       imgPath: 'https://picsum.photos/200/300',
  //       date: "13 Oct 2021",
  //       time: "10:12am"
  //     },
  //     {
  //       id:2,
  //       name: "Banana",
  //       imgPath: 'https://picsum.photos/200/300',
  //       date: "13 Oct 2021",
  //       time: "10:12am"
  //     },
  //     {
  //       id:3,
  //       name: "Banana",
  //       imgPath: 'https://picsum.photos/200/300',
  //       date: "13 Oct 2021",
  //       time: "10:12am"
  //     }
  //   ]
  // }

  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState();
  const [loggedIn, setLoggedIn] = useState(true)

  const HandleLogout = () => {
    setLoggedIn(false);
  }

  useEffect(() => {
    if (!loggedIn) {
      SecureStore.deleteItemAsync('g-user');
      SecureStore.deleteItemAsync('user-name');
      SecureStore.deleteItemAsync('user-id');
    }
  }, [loggedIn])

  useEffect(() => {
    console.log("setUserName", userName);
    console.log("setUserID", userId);

    if (userName && userId) {
      getProfile(userId).then((data) => {
        console.log("DBXX->", data.Item);
        setUserData(data.Item);
      })

    }

  }, [userName, userId])

  useFocusEffect(
    React.useCallback(() => {
      console.log("Screen Focused");

      SecureStore.getItemAsync("user-id").then((result) => {
        setUserId(result);
        getProfile(result).then((data) => {
          console.log("DBXX->", data.Item);
          setUserData(data.Item);
        })
      });




    }, [])
  );


  if (userData && loggedIn) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView style={{ paddingVertical: 30 }} showsVerticalScrollIndicator={false}>
          <View style={{ paddingHorizontal: 20 }}>

            <User name={userData.userName} email={userData.email} />

            <View style={styles.badges}>
              <SectionHeading title="Badges" />
              <View style={styles.badgesContainer}>
                {
                  userData.badges ?
                    userData.badges.map((badge) => {

                      let badgeImage;

                      switch (badge.id) {
                        case 1:
                          badgeImage = badge.achieved ? badgeFirstScan : grayBadgeFirstScan
                          break;
                        case 2:
                          badgeImage = badge.achieved ? badgeTenScans : grayBadgeTenScan
                          break;
                        case 3:
                          badgeImage = badge.achieved ? badgeFirstRecycling : grayBadgeFirstRecycling
                          break;
                        case 4:
                          badgeImage = badge.achieved ? badgeComplexObject : grayBadgeComplexObject
                          break;
                      }
                      return (

                        <Badge key={badge.id} img={badgeImage} name={badge.badgeName} />
                      )
                    })
                    :
                    <></>
                }
              </View>
            </View>

            <View style={styles.History}>
              <SectionHeading title="History" />
              <View style={styles.historyContainer}>
                {
                  userData.history.length > 0 ?
                    userData.history.map((history) => {
                      return (
                        <History key={history.scannedTime} name={history.itemName} imagePath={history.imgPath} date={history.scannedDate} time={history.scannedTime} />
                      )
                    })
                    :
                    <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
                      <Text style={[styles.historyText, { lineHeight: 25, fontSize: 18, color: '#134075' }]}>You have no scans yet!</Text>
                      <Text style={styles.historyText}>Click on Scan to start scanning objects and learn</Text>
                      <Text style={styles.historyText}>how to recycle them</Text>
                      <View style={{ alignItems: 'center', paddingVertical: 24 }}>
                        <SVGComponent img={noHistory} />
                      </View>
                    </View>
                }
              </View>
            </View>
            <View style={{ paddingVertical: 48, paddingHorizontal: 120, marginBottom: 40 }}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => HandleLogout()}>
                <Text style={styles.button}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  else if (!loggedIn) { return (<Login setLoggedIn={setLoggedIn} isProfile={true} />) }
  else return (
    <View style={styles.information}>
      <Text>Loading...</Text>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  badgesContainer: {
    marginTop: 24,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E4E6EE',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
    marginBottom: 48
  },
  historyContainer: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E4E6EE',
    borderRadius: 10,
  },
  historyText: {
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 14,
  },
  information: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#134075',
    textAlign: 'center',
    padding: 16,
    borderRadius: 5
  },
  button: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
    textAlign: 'center'
  },
});

