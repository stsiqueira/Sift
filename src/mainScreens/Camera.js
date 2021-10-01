
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const Camera = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handleLogin()}>
        <Text>Camera Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Camera;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
