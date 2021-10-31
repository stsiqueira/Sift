import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SubSearch from '../subScreens/SubSearch';
import SubResult from '../subScreens/SubResult';
import { Button, Keyboard, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const Search = props => {

	const [showCancelButton, setShowCancelButton] = useState(false)

	const CancelButton = props => {
		return (
			<>
				{
					showCancelButton ?
					<TouchableOpacity style={styles.cancelButton} onPress={() => keyboardDismiss()}>
						<Text style={styles.cancelButtonText}>Cancel</Text>
					</TouchableOpacity>
					: null
				}
			</>
		)
	}

	const keyboardDismiss = () => {
		Keyboard.dismiss()
		setShowCancelButton(false)
	}

	Keyboard.addListener('keyboardDidHide', (e) => {
		setShowCancelButton(false)
	});

  return (
    <NavigationContainer independent={true}>
			<Stack.Navigator>
				<Stack.Screen
					name="Search"
					component={SubSearch}
					options={({
						headerShown: true,
						headerStyle: {
							backgroundColor: '#134075',
						},
						headerTintColor: '#ffffff',
						headerTitleStyle: {
							fontWeight: 'bold',
							fontSize: 20
						},
						headerRight: () => (
							<CancelButton />
						)
					})}
					initialParams={{
						setShowCancelButton: setShowCancelButton
					}}
				/>
				<Stack.Screen
					name="Result"
					component={SubResult}
					options={{
						headerTitle: "Search",
						headerShown: true,
						headerStyle: {
							backgroundColor: '#134075',
						},
						headerTintColor: '#ffffff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerBackTitleVisible: false
					}}
				/>
			</Stack.Navigator>
    </NavigationContainer>
  );
}

export default Search;

const styles = StyleSheet.create({
	cancelButton: {
		textAlign: 'right'
	},
  cancelButtonText: {
		color: '#ffffff',
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'Lato-Bold'
	}
});