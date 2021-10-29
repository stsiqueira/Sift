import React from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import ItemData from '../assets/jsonData/data.json'
import Electronics from '../svgComponents/popularSearch/Electronics'
import Glass from '../svgComponents/popularSearch/Glass'
import Organic from '../svgComponents/popularSearch/Organic'
import Plastic from '../svgComponents/popularSearch/Plastic'

const PopularSearch = props => {
	const showInstructions = (id) => {
		const data = ItemData.find(el => el.id === id);
		if (data) {
			props.navigation.navigate('Result', {
				pageType: 'text',
				searchID: id,
				data: data,
			})
		} else {
			// no results was found for the searched keyword
		}
	}

	const popularSearch = [
		{
			title: "Electronics",
			itemID: "electronic_waste_e_waste",
			image: <Electronics />,
			titleColor: '#2E60A3'
		},
		{
			title: "Plastic",
			itemID: "plastic",
			image: <Plastic />,
			titleColor: '#3E5BA5'
		},
		{
			title: "Glass",
			itemID: "coloured_glass_bottles_and_jars",
			image: <Glass />,
			titleColor: '#999999'
		},
		{
			title: "Organic",
			itemID: "organic",
			image: <Organic />,
			titleColor: '#48B47B'
		},
	];

	return (
		<View>
			<Text style={styles.title}>Popular Search</Text>
				<View>
					{
						popularSearch.map((e, index) => {
							return (
								<TouchableOpacity
									onPress={() => showInstructions(e.itemID)}
									key={`${index}`}
									style={styles.button}
								>
									<View style={styles.buttonImageContainer}>
										{e.image}
									</View>
									<View style={styles.buttonTitleContainer}>
										<Text style={[styles.buttonTitle, {color: e.titleColor}]}>{e.title}</Text>
									</View>
								</TouchableOpacity>
							)
						})
					}
				</View>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	button: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#FFFFFF',
		borderColor: '#E4E6EE',
		borderWidth: 1,
		borderRadius: 6,
		marginTop: 14
	},
	buttonImageContainer: {
		marginRight: 15,
	},
	buttonTitleContainer: {
		flex: 1
	},
	buttonTitle: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default PopularSearch