import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
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
import { globalStyles } from './src/styles/globalStyles';
import { NativeBaseProvider } from 'native-base';
import SVGComponent from './src/svgComponents/SvgComponent';
import * as svgImg from './src/services/Images'
import * as SecureStore from 'expo-secure-store';


const Tab = createBottomTabNavigator();

const App = () => {
  console.disableYellowBox = true;
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

  useEffect(() => {
    //Check if the Google login is successful previously; try accessing save token/values
    SecureStore.getItemAsync("g-user").then((result)=>{
      let response = JSON.parse(result)
      if (response.user.email) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    });
  }, []);


  if(!fontsLoaded) {
		return null;
	}
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {loggedIn ?
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
                  paddingTop:0,
                  height:99,
                  backgroundColor: '#fff',
                }
              }}
            >
              <Tab.Screen name="Home" component={Home}  
                options={{
                  tabBarIcon:({focused}) => (
                    <View style={[globalStyles.iconContainer]}>
                      {
                        focused ? 
                          <View>
                            <SVGComponent img={svgImg.homeIconActive}/>
                          </View>
                          :
                          <View>
                            <SVGComponent img={svgImg.homeIcon}/>
                          </View>
                      }
                              <View >
                              <Text style={globalStyles.iconLabel}> Home</Text>
                              </View>
                        
                    </View>
                  )
                }}
              />
              <Tab.Screen name="Search" component={Search} 
                listeners={({ navigation }) => ({ 
                  tabPress: () => { 
                    navigation.navigate('Search', { screen: 'SubSearch' }); 
                  }, 
                })}
                options={{
                  tabBarIcon:({focused}) => (
                    <View style={[globalStyles.iconContainer]}>  
                    {
                        focused ? 
                          <View>
                            <SVGComponent img={svgImg.searchIconActive}/>
                          </View>
                          :
                          <View>
                            <SVGComponent img={svgImg.searchIcon}/> 
                          </View>
                    }         
                    <View >
                    <Text style={globalStyles.iconLabel}> Search</Text>
                    </View>
                     
                    </View>
                  ),
                  headerShown: false
                }}
            />
              <Tab.Screen name="Camera" component={Camera} 
                options={{
                  tabBarIcon:({focused}) => (
                    <View style={[globalStyles.iconContainer]}>
                          <View style={{marginTop:-.4}}>
                            <SVGComponent style={{borderWidth:1, borderColor:'black'}}img={svgImg.cameraIcon}/>
                          </View>
                          <View >
                          <Text style={globalStyles.iconLabel}>Scan</Text>
                          </View>
                     
                    </View>
                  )
                }}
              />
              <Tab.Screen name="Depots" component={RCL} 
                options={{
                  tabBarIcon:({focused}) => (
                    <View style={[globalStyles.iconContainer]}>
                      {
                        focused ? 
                          <View>
                            <SVGComponent img={svgImg.locationIconActive}/>
                          </View>
                          :
                          <View>
                            <SVGComponent img={svgImg.locationIcon}/>
                          </View>
                      }
                          <View>
                            <Text style={globalStyles.iconLabel}> Depots</Text>
                          </View>
                    </View>
                  ),
                  headerShown: false
                }}
              />
              <Tab.Screen name="Profile" component={Profile} 
                options={{
                  tabBarIcon:({focused}) => (
                    <View style={[globalStyles.iconContainer]}>
                      {
                        focused ? 
                          <View>
                            <SVGComponent img={svgImg.profileIconActive}/>
                          </View>
                          :
                          <View>
                            <SVGComponent img={svgImg.profileIcon}/>
                          </View>
                      }
                          <View>
                          <Text style={globalStyles.iconLabel}>Profile</Text>
                          </View>
                      
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
    </NativeBaseProvider>

  );
}
export default App;


