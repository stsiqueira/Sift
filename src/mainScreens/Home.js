import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from 'react-native';



const Home = (props) => {

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.badges}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Promotion</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.image}
              source={require('../assets/images/wireframesIMG/Group70.png')}
            />
          </View>
        </View>

        <View style={styles.badges}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Did you Know</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.image}
              source={require('../assets/images/wireframesIMG/Group58.png')}
            />
          </View>
        </View>

        <View style={styles.callToAction}>
          <View style={styles.textContainer}>
            <Text style={styles.callToActionText}>Want to know how you can recycle your waste? Scan it! Swift can identify different materials and tell you how to properly dispose of them!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Scan an object</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.callToAction}>
          <View style={styles.textContainer}>
            <Text style={styles.callToActionText}>Want to know where are the nearest Recycling Center Location? Swift can help you!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Find Recycling Center</Text>
            </TouchableOpacity>
          </View> 
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

