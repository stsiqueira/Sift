import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Location from "./Location";
import LocationResult from "./LocationResult";

const Stack = createStackNavigator();

const StackLocation = () => {
    return (
    <Stack.Navigator  
        screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: '#134075'},  
            headerTitleStyle:{
              fontFamily:'Lato-Bold',
              fontSize:20,
              lineHeight:24
            },
            headerTintColor:'#fff',
            headerBackTitleVisible:false
        }}>
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen 
            name="LocationResult" 
            component={LocationResult} 
            options={{
                headerTitle:'Location'
            }}/>
    </Stack.Navigator>
    )
}

export default StackLocation