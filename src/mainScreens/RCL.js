
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Location from '../stack/location/Location';



const RCL = (props) => {

  return (
      <Location />
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
