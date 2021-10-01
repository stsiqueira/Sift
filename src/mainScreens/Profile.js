
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const Profile = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handleLogin()}>
        <Text>Profile Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
