import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
	recyclingCentreIllustration,
	plasticBin,
	organicIllustration,
	organicBin,
	glassBin,
	glassIllustration,
	paperBin,
	paperIllustration,
	garbageBin,
	plasticIllustration
} from '../services/Images'
import SVGComponent from "../svgComponents/SvgComponent"
import * as WebBrowser from 'expo-web-browser'

const SubResult = props => {
	const [pageType, setPageType] = useState(props.route.params.pageType)
	const [searchID, setSearchID] = useState(props.route.params.searchID)
	const [searchImage, setSearchImage] = useState('https://picsum.photos/1080/1920')

	const [itemName, setItemName] = useState(props.route.params.data.name)
	const [itemType, setItemType] = useState(props.route.params.data.category)
	const [disposeType, setDisposeType] = useState(props.route.params.data.category.replaceAll("-", " "))
	const [instructions, setinstructions] = useState(props.route.params.data.instructions)

	const compostBinLink = () => {
		WebBrowser.openBrowserAsync('https://www.google.com/search?q=How+to+create+a+compost+bin&oq=How+to+create+a+compost+bin&aqs=chrome..69i57.193j0j7&sourceid=chrome&ie=UTF-8');
	}

	return (
		<>
			<ScrollView>
				{
					pageType === 'image' ?
					(
						<View>
							<Image
								style={styles.searchImage}
								source={{
									uri: searchImage,
								}}
							/>
						</View>
					)
					: null
				}
				{
					pageType === 'text' ?
					(
						<View style={styles.container}>
							<Text style={styles.title}>{itemName}</Text>
							<View style={styles.card}>
								<View style={styles.itemNameContainer}>
									<Text style={styles.itemName}>You have to use:</Text>
									<Text style={styles.itemName}>{disposeType}</Text>
								</View>
								<View style={styles.imageContainer}>
									{
										itemType.toLowerCase() === 'recycling-center' ?
										(<SVGComponent img={recyclingCentreIllustration} />): null
									}
									{
										itemType.toLowerCase() === 'blue-box' ?
										(<SVGComponent img={plasticBin} />): null
									}
									{
										itemType.toLowerCase() === 'grey-box' ?
										(<SVGComponent img={glassBin} />): null
									}
									{
										itemType.toLowerCase() === 'compost-bin' ?
										(<SVGComponent img={organicBin} />): null
									}
									{
										itemType.toLowerCase() === 'yellow-bag' ?
										(<SVGComponent img={paperBin} />): null
									}
									{
										itemType.toLowerCase() === 'garbage-bin' ?
										(<SVGComponent img={garbageBin} />): null
									}
								</View>
								<View style={styles.instructionsContainer}>
									<Text style={styles.instructions}>{instructions}</Text>
								</View>
								<View style={styles.illustrationContainer}>
									{
										itemType.toLowerCase() === 'blue-box' ?
										(<SVGComponent img={plasticIllustration} />): null
									}
									{
										itemType.toLowerCase() === 'grey-box' ?
										(<SVGComponent img={glassIllustration} />): null
									}
									{
										itemType.toLowerCase() === 'compost-bin' ?
										(<SVGComponent img={organicIllustration} />): null
									}
									{
										itemType.toLowerCase() === 'yellow-bag' ?
										(<SVGComponent img={paperIllustration} />): null
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
						</View>
					)
					: null
				}
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: '#f3f4f8'
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
	},
	searchImage: {
		width: '100%',
		height: 200,
		transform: [{ scale: 1.2 }]
	}
});

export default SubResult
