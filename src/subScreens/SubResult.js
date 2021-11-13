import React, { useState } from 'react'
import { Image, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
	plasticIllustration,
	garbageIllustration,
	cupsWidthPlasticLidAndPaperSleeveIllustration,
	glassBottlesWithPlasticLid
} from '../services/Images'
import SVGComponent from "../svgComponents/SvgComponent"
import * as WebBrowser from 'expo-web-browser'

const SubResult = props => {
	const [pageType, setPageType] = useState(props.route.params.pageType)
	const [searchID, setSearchID] = useState(props.route.params.searchID)
	const [searchImage, setSearchImage] = useState('https://picsum.photos/1080/1920')

	const [itemName, setItemName] = useState(props.route.params.data.name)
	const [itemType, setItemType] = useState(props.route.params.data.category)
	const [disposeType, setDisposeType] = useState(props.route.params.data.category.replace(/-/g, " "))
	const [instructions, setinstructions] = useState(props.route.params.data.instructions)

	const compostBinLink = () => {
		WebBrowser.openBrowserAsync('https://www.google.com/search?q=How+to+create+a+compost+bin&oq=How+to+create+a+compost+bin&aqs=chrome..69i57.193j0j7&sourceid=chrome&ie=UTF-8');
	}

	// fix for going back directly to search result page
	Keyboard.dismiss()

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
				<View style={styles.container}>
					{
						pageType === 'text' && searchID !== 'glass_bottle_with_plastic_lid' && searchID !== 'cup_with_plastic_lid_and_paper_sleeve' ?
						(
							<Text style={styles.title}>{itemName}</Text>
						)
						:
						(
							<View style={styles.specialItemNameContainer}>
								<Text style={styles.itemName}>You have to use:</Text>
								{
									searchID !== 'glass_bottle_with_plastic_lid' && searchID !== 'cup_with_plastic_lid_and_paper_sleeve' ?
									(
										<Text style={styles.specialItemName}>{disposeType}</Text>
									) :
									(
										<Text style={styles.specialItemName}>Multiple Bins</Text>
									)
								}
							</View>
						)
					}
					{
						searchID === 'glass_bottle_with_plastic_lid' || searchID === 'cup_with_plastic_lid_and_paper_sleeve' ?
						(
							<>
								<View style={styles.instructionsContainer}>
									<Text style={styles.specialInstructions}>{instructions}</Text>
								</View>
								<View style={styles.specialCardOne}>
									{
										searchID === 'glass_bottle_with_plastic_lid' ?
										(
											<SVGComponent img={cupsWidthPlasticLidAndPaperSleeveIllustration} />
										)
										:
										(
											<SVGComponent img={glassBottlesWithPlasticLid} />
										)
									}
								</View>
								<View style={styles.specialCardTwo}>
									<View style={styles.specialCardTwoInnerOne}>
										<SVGComponent img={plasticBin} />
										<Text style={styles.specialCardTwoInnerText}>Blue Bin</Text>
									</View>
									{
										searchID === 'glass_bottle_with_plastic_lid' ?
										(
											<View style={styles.specialCardTwoInnerTwo}>
												<SVGComponent img={glassBin} />
												<Text style={styles.specialCardTwoInnerText}>Grey Bin</Text>
											</View>
										)
										:
										(
											<View style={styles.specialCardTwoInnerTwo}>
												<SVGComponent img={paperBin} />
												<Text style={styles.specialCardTwoInnerText}>Yellow Bag</Text>
											</View>
										)
									}
								</View>
							</>
						)
						:
						(
							<View style={styles.card}>
								{
									pageType === 'text' ?
									(
										<View style={styles.itemNameContainer}>
											<Text style={styles.itemName}>You have to use:</Text>
											<Text style={styles.itemName}>{disposeType}</Text>
										</View>
									) : null
								}
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
									{
										itemType.toLowerCase() === 'garbage-bin' ?
										(<SVGComponent img={garbageIllustration} />): null
									}
								</View>
							</View>
						)
					}
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
							itemType.toLowerCase() === 'recycling-center' ||
							itemType.toLowerCase() === 'grey-box' ||
							itemType.toLowerCase() === 'blue-box' ?
							(
								<>
									<View style={styles.seperatorContainer}>
										<View style={styles.seperatorLine}></View>
										<Text style={styles.seperatorText}>or</Text>
										<View style={styles.seperatorLine}></View>
									</View>
									<TouchableOpacity
										style={styles.recyclingCenterButton}
									>
										<Text style={styles.recyclingCenterButtonText}>Find Recycling Center</Text>
									</TouchableOpacity>
								</>
							)
							: null
						}
					</View>
				</View>
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
		borderColor: '#E4E6EE',
		borderWidth: 1,
		borderRadius: 5
	},
	specialCardOne: {
		padding: 20,
		backgroundColor: '#ffffff',
		borderColor: '#E4E6EE',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 16
	},
	specialCardTwo: {
		padding: 20,
		backgroundColor: '#ffffff',
		borderColor: '#E4E6EE',
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	specialCardTwoInnerOne: {
		alignItems: 'center',
		flex: 1,
		paddingRight: 50,
		transform: [{scale: 0.8}]
	},
	specialCardTwoInnerTwo: {
		alignItems: 'center',
		flex: 1,
		transform: [{scale: 0.8}]
	},
	specialCardTwoInnerText: {
		fontSize: 16,
		fontFamily: 'Lato-Regular',
		textAlign: 'center',
		marginTop: 12,
		transform: [{scale: 1.2}]
	},
	itemName: {
		fontSize: 24,
		fontWeight: 'bold',
		textTransform: 'capitalize',
		fontFamily: 'Lato-Bold'
	},
	specialItemName: {
		fontSize: 36,
		fontWeight: 'bold',
		textTransform: 'capitalize',
		fontFamily: 'Lato-Bold'
	},
	itemNameContainer: {
		alignItems: 'center',
		marginBottom: 20
	},
	specialItemNameContainer: {
		alignItems: 'center',
		marginBottom: 25,
		marginTop: 10
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},
	instructions: {
		fontSize: 14,
		fontFamily: 'Lato-Regular'
	},
	specialInstructions: {
		fontSize: 18,
		fontFamily: 'Lato-Bold',
		marginTop: 16
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
	},
	seperatorContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: -15,
		marginBottom: 30
	},
	seperatorText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingLeft: 25,
		paddingRight: 25,
		fontFamily: 'Lato-Bold'
	},
	seperatorLine: {
		backgroundColor: 'rgba(0, 48, 111, 0.32)',
		borderRadius: 40,
		height: 3,
		flex: 1
	}
});

export default SubResult
