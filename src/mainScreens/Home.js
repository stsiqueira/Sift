
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const Home = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handleLogin()}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
