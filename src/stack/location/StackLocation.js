import React from "react";
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Location from "./Location";
import LocationResult from "./LocationResult";

const Stack = createStackNavigator();

const StackLocation = () => {
    return (
    <Stack.Navigator  
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="LocationResult" component={LocationResult} />
    </Stack.Navigator>
    )
}

export default StackLocation