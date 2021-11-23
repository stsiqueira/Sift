
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Google from 'expo-google-app-auth'
import SVGComponent from '../svgComponents/SvgComponent';
import { googleButton, Logo } from '../services/Images';
import * as SecureStore from 'expo-secure-store';
import {getProfile, createDBProfile} from '../services/ProfileServices'


const Login = (props) => {


  const handleLogin = async () => {

    const config = {
      iosClientId: `242612681290-ml28k5hqb9on63k1qgji1585mtp2em5n.apps.googleusercontent.com`,
      androidClientId: `242612681290-vd9udacgl69vq7nabrr1hg3vfre57s3p.apps.googleusercontent.com`,
      SCOPES: ['profile', 'email']
    }

    Google.logInAsync(config)
      .then((result)=>{
        console.log("Glogin->",result) //---> Here we have all tokens (ID, ACCESS and REFRESH) along with user scope data.
        const {type} = result;

        if(type == 'success'){

          saveLocal("g-user", result)
          props.setLoggedIn(true);     

        }else{
          console.log('Google sign in was cancelled')
        }
      })
      .catch(error=> console.log(error))

  }

  async function saveLocal(key, value) {

    SecureStore.setItemAsync(key, JSON.stringify(value)).then(async()=>{
      
      let getDbProfile =  await getProfile(value.user.email)
      
      if(JSON.stringify(getDbProfile) === '{}'){ //User Doesn't Exists        
        let newUser = {email: value.user.email, name: value.user.name}
        createDBProfile(newUser);
        console.log("New User Created ->");
      }

    });     
    SecureStore.setItemAsync("user-name", value.user.name);
    SecureStore.setItemAsync("user-id", value.user.email);
          
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
