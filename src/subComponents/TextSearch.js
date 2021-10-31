import React, { useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity } from 'react-native'
import ItemNames from '../assets/jsonData/names.json'
import ItemData from '../assets/jsonData/data.json'
import SearchInput from '../svgComponents/searchInput/SearchInput'
import { useHeaderHeight } from '@react-navigation/elements';
const TextSearch = props => {
	const [keyword, setKeyword] = React.useState('')
	const [matches, setMatches] = React.useState([])
	const headerHeight = useHeaderHeight();
	const [inputFocused, setInputFocused] = useState(true)

	const setShowCancelButton = props.setShowCancelButton

	const handleInputFocused = () => {
		setInputFocused(true)
		setShowCancelButton(true)
	}

	const handleInputBlurred = () => {
		setInputFocused(false)
		setMatches([])
	}

	const autoComplete = (keyword) => {
		setMatches([]);
		if (keyword.length >= 1) {
			let data = [];
			ItemNames.forEach(e1 => {
				if (e1.id.replaceAll("_", " ").includes(keyword)) {
					data.push(e1);
				}
			});
			setMatches(data);
		}
	}

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

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
			keyboardVerticalOffset={headerHeight + 26}
		>
			{inputFocused ? (<View style={{flex: 1}}></View>) : null}
			{
				matches.length > 0 ?
				(
					<ScrollView
						style={styles.searchSuggestionsContainer}
						showsVerticalScrollIndicator={true}
						persistentScrollbar={true}
						keyboardShouldPersistTaps='always'
					>
						{
							matches.map((m, index) =>
								<TouchableOpacity
									key={m.id}
									onPress={() => showInstructions(m.id)}
									style={styles.searchSuggestionButtons}
								>
									<Text>{m.name}</Text>
								</TouchableOpacity>
							)
						}
					</ScrollView>
				) : null
			}
			<View style={styles.searchInputContainer}>
				<SearchInput />
				<TextInput
					onChangeText={text => {
						setKeyword(text)
						autoComplete(text.toString().toLowerCase())
					}}
					onFocus={() => {
						props.handleInputFocused()
						handleInputFocused()
					}}
					onBlur={() => {
						props.handleInputBlurred()
						handleInputBlurred()
					}}
					inputFocused={true}
					value={keyword}
					autoCompleteType={'off'}
					placeholder='Search for an item'
					style={styles.searchInputText}
					placeholderTextColor={'#000000'}
				/>
			</View>
			{!inputFocused ? (<View style={{flex: 1}}></View>) : null}
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-end',
		flex: 1,
		maxHeight: '100%',
	},
	searchInputContainer: {
		flexDirection: 'row',
		padding: 7,
		backgroundColor: '#FFFFFF',
		borderColor: '#E4E6EE',
		borderWidth: 1,
		borderRadius: 6,
		marginBottom: 6
	},
	searchInputText: {
		marginLeft: 10,
		fontSize: 14,
		flex: 1
	},
	searchSuggestionsContainer: {
		backgroundColor: '#FFFFFF',
		borderTopColor: '#E4E6EE',
		borderLeftColor: '#E4E6EE',
		borderRightColor: '#E4E6EE',
		borderBottomColor: 'transparent',
		borderWidth: 1,
		borderRadius: 6,
		marginBottom: 12
	},
	searchSuggestionButtons: {
		padding: 16,
		borderTopColor: 'transparent',
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: '#E4E6EE',
		borderWidth: 1,
		fontSize: 14,
		fontFamily: 'Lato-Regular'
	}
});

export default TextSearch
