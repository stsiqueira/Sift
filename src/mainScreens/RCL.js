
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const RCL = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handleLogin()}>
        <Text>RCL Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
export default RCL;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
