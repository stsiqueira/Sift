import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RecyclingCenterIllustration from '../svgComponents/searchResult/RecyclingCenterIllustration'
import RecycleIllustration from '../svgComponents/searchResult/PlasticIllustration'
import RecycleBin from '../svgComponents/searchResult/PlasticBin'
import OrganicIllustration from '../svgComponents/searchResult/OrganicIllustration'
import OrganicBin from '../svgComponents/searchResult/OrganicBin'
import GlassBin from '../svgComponents/searchResult/GlassBin'
import GlassIllustration from '../svgComponents/searchResult/GlassIllustration'
import PaperBin from '../svgComponents/searchResult/PaperBin'
import PaperIllustration from '../svgComponents/searchResult/PaperIllustration'
import GarbageBin from '../svgComponents/searchResult/GarbageBin'
import * as WebBrowser from 'expo-web-browser'

const SubResult = props => {

	const [data, setData] = useState(props.route.params.data)

	const [pageType, setPageType] = useState(props.route.params.pageType)
	const [searchID, setSearchID] = useState(props.route.params.searchID)

	const [itemName, setItemName] = useState(props.route.params.data.name)
	const [itemType, setItemType] = useState(props.route.params.data.category)
	const [disposeType, setDisposeType] = useState(props.route.params.data.category.replaceAll("-", " "))
	const [instructions, setinstructions] = useState(props.route.params.data.instructions)

	const compostBinLink = () => {
		WebBrowser.openBrowserAsync('https://www.google.com/search?q=How+to+create+a+compost+bin&oq=How+to+create+a+compost+bin&aqs=chrome..69i57.193j0j7&sourceid=chrome&ie=UTF-8');
	}

	return (
		<ScrollView style={styles.container}>
			{
				pageType === 'text' ?
				(
					<>
						<Text style={styles.title}>{itemName}</Text>
						<View style={styles.card}>
							<View style={styles.itemNameContainer}>
								<Text style={styles.itemName}>You have to use:</Text>
								<Text style={styles.itemName}>{disposeType}</Text>
							</View>
							<View style={styles.imageContainer}>
								{
									itemType.toLowerCase() === 'recycling-center' ?
									(<RecyclingCenterIllustration />): null
								}
								{
									itemType.toLowerCase() === 'blue-box' ?
									(<RecycleBin />): null
								}
								{
									itemType.toLowerCase() === 'grey-box' ?
									(<GlassBin />): null
								}
								{
									itemType.toLowerCase() === 'compost-bin' ?
									(<OrganicBin />): null
								}
								{
									itemType.toLowerCase() === 'yellow-bag' ?
									(<PaperBin />): null
								}
								{
									itemType.toLowerCase() === 'garbage-bin' ?
									(<GarbageBin />): null
								}
							</View>
							<View style={styles.instructionsContainer}>
								<Text style={styles.instructions}>{instructions}</Text>
							</View>
							<View style={styles.illustrationContainer}>
								{
									itemType.toLowerCase() === 'blue-box' ?
									(<RecycleIllustration />): null
								}
								{
									itemType.toLowerCase() === 'grey-box' ?
									(<GlassIllustration />): null
								}
								{
									itemType.toLowerCase() === 'compost-bin' ?
									(<OrganicIllustration />): null
								}
								{
									itemType.toLowerCase() === 'yellow-bag' ?
									(<PaperIllustration />): null
								}
							</View>
						</View>
						<View style={styles.bottomContainer}>
							{
								itemType.toLowerCase() === 'compost-bin' ?
								(
									<Text
										onPress={() => compostBinLink()}
										style={styles.link}
									>
										How to create a compost bin
									</Text>
								)
								: null
							}
							{
								itemType.toLowerCase() === 'recycling-center' ?
								(
									<TouchableOpacity
										style={styles.recyclingCenterButton}
									>
										<Text style={styles.recyclingCenterButtonText}>Find Recycling Center</Text>
									</TouchableOpacity>
								)
								: null
							}
						</View>
					</>
				)
				: null
			}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	title: {
		fontSize: 36,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#134075',
		paddingBottom: 20,
		fontFamily: 'Lato-Bold'
	},
	card: {
		padding: 20,
		backgroundColor: '#ffffff',
	},
	itemName: {
		fontSize: 24,
		fontWeight: 'bold',
		textTransform: 'capitalize',
		fontFamily: 'Lato-Bold'
	},
	itemNameContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	instructions: {
		fontSize: 14,
		fontFamily: 'Lato-Regular'
	},
	instructionsContainer: {
		marginBottom: 20,
	},
	link: {
		fontSize: 20,
		fontWeight: '900',
		fontStyle: 'italic',
		textDecorationLine: 'underline',
		color: '#028CA1',
		fontFamily: 'Lato-Black'
	},
	bottomContainer: {
		alignItems: 'center',
		paddingTop: 40,
		paddingBottom: 60,
	},
	illustrationContainer: {
		alignItems: 'center',
	},
	recyclingCenterButton: {
		backgroundColor: '#134075',
		textAlign: 'center',
		padding: 16,
		borderRadius: 5
	},
	recyclingCenterButtonText: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'Lato-Bold'
	}
});

export default SubResult
