
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Google from 'expo-google-app-auth'
import SVGComponent from '../svgComponents/SvgComponent';
import { googleButton, Logo } from '../services/Images';


const Login = (props) => {


  const handleLogin = async () => {

    const config = {
      iosClientId: `242612681290-ml28k5hqb9on63k1qgji1585mtp2em5n.apps.googleusercontent.com`,
      androidClientId: `242612681290-vd9udacgl69vq7nabrr1hg3vfre57s3p.apps.googleusercontent.com`,
      SCOPES: ['profile', 'email']
    }
    Google.logInAsync(config)
      .then((result)=>{
        console.log(result) //---> HERE WE HAVE ACCESS TO TOKEN, PLS SEND IT TO DB.
        const {type, user} = result;
        if(type == 'success'){
          props.setLoggedIn(true);
        }else{
          console.log('Google sign in was cancelled')
        }
      })
      .catch(error=> console.log(error))

  }

  return (
    <View style={styles.container}>
      <View>
        <SVGComponent img={Logo}/>
      </View>

      <TouchableOpacity onPress={()=>handleLogin()}>
        <SVGComponent img={googleButton}/>
      </TouchableOpacity>
    </View>
  );
}
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:128,
    paddingBottom:88
  },
});
