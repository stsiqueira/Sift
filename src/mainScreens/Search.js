import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SubSearch from '../subScreens/SubSearch';
import SubResult from '../subScreens/SubResult';
import FallbackLabels from '../subScreens/Fallback';
import NoResult from '../subScreens/NoResult';
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
			<Stack.Navigator>
				<Stack.Screen
					name="SubSearch"
					component={SubSearch}
					options={({
						headerTitle: "Search",
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
				<Stack.Screen
					name="ScanResult"
					component={SubResult}
					options={{
						headerTitle: "Scan",
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
				<Stack.Screen
					name="FallbackLabels"
					component={FallbackLabels}
					options={{
						headerTitle: "Scan",
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
				<Stack.Screen
					name="NoResult"
					component={NoResult}
					options={{
						headerTitle: "Item not found",
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