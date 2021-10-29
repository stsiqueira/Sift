import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Image, View, Text} from 'react-native';
import Home from './src/mainScreens/Home';
import Search from './src/mainScreens/Search';
import Camera from './src/mainScreens/Camera';
import RCL from './src/mainScreens/RCL';
import Profile from './src/mainScreens/Profile';
import Login from './src/mainScreens/login';
import { useFonts }from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from './src/styles/globalStyles';


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
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              headerStyle: { backgroundColor: '#134075'},  
              headerTitleStyle:{
                fontFamily:'Lato-Bold',
                fontSize:20,
                lineHeight:24
              },
              headerTintColor:'#fff',
              tabBarStyle:{
                borderTopColor:'#00306F',
                borderTopWidth:10,
                height:110,
                backgroundColor: '#fff'
              }
            }}
           >
            <Tab.Screen name="Home" component={Home}  
              options={{
                tabBarIcon:({focused}) => (
                  <View style={[globalStyles.iconContainer, focused ? {borderBottomColor: '#016089'}: {borderBottomColor: '#fff'}]}>
                    <Image
                      style={{flex:1}}
                      resizeMode='contain'
                      source={require('./src/assets/images/navigationIcons/home.png')}/>
                    <Text style={globalStyles.iconLabel}> Home</Text>
                  </View>
                )
              }}
            />
            <Tab.Screen name="Search" component={Search} 
              options={{
                tabBarIcon:({focused}) => (
                  <View style={[globalStyles.iconContainer, focused ? {borderBottomColor: '#016089'}: {borderBottomColor: '#fff'}]}>
                    <Image
                    style={{flex:1}}
                    resizeMode='contain'
                    source={require('./src/assets/images/navigationIcons/search.png')}/>
                    <Text style={globalStyles.iconLabel}> Search</Text>
                  </View>
                ),
								headerShown: false
              }}
           />
            <Tab.Screen name="Camera" component={Camera} 
              options={{
                tabBarIcon:({focused}) => (
                  <View style={[globalStyles.iconContainer, focused ? {borderBottomColor: '#016089'}: {borderBottomColor: '#fff'}]}>
                    <View style={{ 
                        width:50, flex:1, backgroundColor:'#016089',
                        borderBottomLeftRadius:30,
                        borderBottomRightRadius:30,
                        justifyContent:'center', alignItems:'center', paddingBottom:10
                        }}>
                        <View style={{ 
                        width:35, height:35, backgroundColor:'#fff',
                        borderRadius:'50%'

                        }}>

                        </View>

                    </View>
                    <Text style={globalStyles.iconLabel}> Scan</Text>
                  </View>
                )
              }}
            />
            <Tab.Screen name="Depots" component={RCL} 
              options={{
                tabBarIcon:({focused}) => (
                  <View style={[globalStyles.iconContainer, focused ? {borderBottomColor: '#016089'}: {borderBottomColor: '#fff'}]}>
                    <Image
                      style={{flex:1}}
                      resizeMode='contain'
                      source={require('./src/assets/images/navigationIcons/location.png')}/>
                    <Text style={globalStyles.iconLabel}> Depots</Text>
                  </View>
                )
              }}
             />
            <Tab.Screen name="Profile" component={Profile} 
              options={{
                tabBarIcon:({focused}) => (
                  <View style={[globalStyles.iconContainer, focused ? {borderBottomColor: '#016089'}: {borderBottomColor: '#fff'}]}>
                    <Image
                      style={{flex:1}}
                      resizeMode='contain'
                      source={require('./src/assets/images/navigationIcons/profile.png')}/>
                    <Text style={globalStyles.iconLabel}> Profile</Text>
                  </View>
                ),
              }}
             />
          </Tab.Navigator>
        :
        <Login setLoggedIn={setLoggedIn}/>
      }
      <StatusBar style="auto" style='light' />
    </NavigationContainer>
  );
}
export default App;


