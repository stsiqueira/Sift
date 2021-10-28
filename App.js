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
import { useFonts }from 'expo-font';

const Tab = createBottomTabNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./src/assets/fonts/Lato-Black.ttf'),
		'Lato-BlackItalic': require('./src/assets/fonts/Lato-BlackItalic.ttf'),
		'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
		'Lato-BoldItalic': require('./src/assets/fonts/Lato-BoldItalic.ttf'),
		'Lato-LightItalic': require('./src/assets/fonts/Lato-LightItalic.ttf'),
		'Lato-Italic': require('./src/assets/fonts/Lato-Italic.ttf'),
		'Lato-Light': require('./src/assets/fonts/Lato-Light.ttf'),
		'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
		'Lato-Thin': require('./src/assets/fonts/Lato-Thin.ttf'),
		'Lato-ThinItalic': require('./src/assets/fonts/Lato-ThinItalic.ttf'),
  })
  if(!fontsLoaded) {
		return null;
	}
  return (
    <NavigationContainer>
      {!loggedIn ?

          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Camera" component={Camera} />
            <Tab.Screen name="RCL" component={RCL} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>

        :
        <Login setLoggedIn={setLoggedIn}/>
      }
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
