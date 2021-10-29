import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Home from './src/mainScreens/Home';
import Search from './src/mainScreens/Search';
import Camera from './src/mainScreens/Camera';
import RCL from './src/mainScreens/RCL';
import Profile from './src/mainScreens/Profile';
import Login from './src/mainScreens/login';
const Tab = createBottomTabNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <NavigationContainer>
      {loggedIn ?

          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search}
							options={{ headerShown: false }}
						/>
            <Tab.Screen name="Camera" component={Camera} />
            <Tab.Screen name="RCL" component={RCL} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>

        :
        <Login setLoggedIn={setLoggedIn}/>
      }
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
export default App
