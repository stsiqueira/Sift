
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView } from 'react-native';



const Profile = (props) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileInfo}>
          <View style={styles.profileName}>
            <Text style={styles.title}>John Smith</Text>
            <Text>icon</Text>
          </View>
          <View style={styles.profileEmail}>
            <Text> johnsmith@gmail.com</Text>
          </View>
        </View>

        <View style={styles.badges}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Badges</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.image}
              source={require('../assets/images/wireframesIMG/Badges.png')}
            />
          </View>
        </View>


        <View style={styles.badges}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>History</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image 
            style={styles.image}
            source={require('../assets/images/wireframesIMG/Group69.png')}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    paddingHorizontal:20,
    paddingVertical:30,
  },
  profileInfo:{
    width:'100%',
  },
  profileName:{
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  button:{
    alignItems: 'center'
  },
  buttonText:{
    backgroundColor:"#E5E5E5",
    fontSize:20,
  }

});

