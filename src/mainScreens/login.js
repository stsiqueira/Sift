
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Google from 'expo-google-app-auth'


const Login = (props) => {

  const handleLogin = () => {
    const config = {
      iosClientId: `242612681290-ml28k5hqb9on63k1qgji1585mtp2em5n.apps.googleusercontent.com`,
      androidClientId: `242612681290-vd9udacgl69vq7nabrr1hg3vfre57s3p.apps.googleusercontent.com`,
      SCOPES: ['profile', 'email']
    }
    Google.logInAsync(config)
      .then((result)=>{
        const {type, user} = result;

        if(type == 'success'){
          const {email, name, photoUrl} = user;
          console.log(email, name, photoUrl)
          console.log(user)
          console.log('Google sign in successful.')
          props.setLoggedIn(true);
        }else{
          console.log('Google sign in was cancelled')
        }
      })
      .catch(error=> console.log(error))
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handleLogin()}>
        <Text>Login</Text>
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
    justifyContent: 'center',
  },
});
