
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const Search = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handleLogin()}>
        <Text>Search Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
