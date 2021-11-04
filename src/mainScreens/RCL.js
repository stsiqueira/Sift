
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Location from '../stack/location/Location';
import StackLocation from '../stack/location/StackLocation';



const RCL = (props) => {

  return (
      // <Location />
      <StackLocation />
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
