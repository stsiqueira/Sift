import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Text, FlatList } from 'react-native'
import ItemNames from '../assets/jsonData/names.json'
import ItemData from '../assets/jsonData/data.json'
import { useHeaderHeight } from '@react-navigation/elements';
import { searchInput } from '../services/Images'
import SVGComponent from "../svgComponents/SvgComponent"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.', 'Non-serializable values were found in the navigation state']);

const TextSearch = props => {
	const [keyword, setKeyword] = React.useState('')
	const [matches, setMatches] = React.useState([])
	const headerHeight = useHeaderHeight();
	const [inputFocused, setInputFocused] = useState(true)
	const [itemNames, setItemNames] = useState(ItemNames)
	const [itemData, setItemData] = useState(ItemData)

	const setShowCancelButton = props.setShowCancelButton

	const handleInputFocused = () => {
		setInputFocused(true)
		setShowCancelButton(true)
	}

	const handleInputBlurred = () => {
		setInputFocused(false)
		setMatches([])
		setKeyword('')
	}

	const autoComplete = (keyword) => {
		setMatches([]);
		let keywordLength = keyword.length;
		if (keywordLength >= 1) {
			let data = [];
			itemNames.forEach(e1 => {
				if (e1.id.replace(/_/g, " ").substring(0, keywordLength).toLowerCase().includes(keyword)) {
					data.push(e1);
				}
			});
			setMatches(data);
		}
	}

	const showInstructions = (id) => {
		const data = itemData.find(el => el.id === id);
		if (data) {
			props.navigation.navigate('Result', {
				pageType: 'text',
				searchID: id,
				data: data,
			})
			setKeyword('')
		} else {
			// no results was found for the searched keyword
		}
	}

	const getItemNames = () => {
		fetch("http:127.0.0.1:4000/graphql", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: `
					{
						items{
							id
							name
							category
							instructions
						}
					}
				`
			}),
		})
		.then(res => res.json())
		.then(res => {
			setItemData(res.data.items)
		});
	}

	const getItemData = () => {
		fetch("http:127.0.0.1:4000/graphql", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: `
					{
						items{
							id
							name
						}
					}
				`
			}),
		})
		.then(res => res.json())
		.then(res => {
			setItemNames(res.data.items)
		});
	}

	useEffect(() => {
		// getItemNames()
		// getItemData()
	}, [])

	const ShowInstructionButton = ({ id, name }) => {
		return (
			<TouchableOpacity
				key={id}
				onPress={() => {
					showInstructions(id)
				}}
				style={styles.searchSuggestionButtons}
			>
				<Text>{name}</Text>
			</TouchableOpacity>
		)
	}

	const renderItem = ({ item }) => <ShowInstructionButton id={item.id} name={item.name} />;

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : undefined}
			style={styles.container}
			keyboardVerticalOffset={headerHeight + 26}
		>
			{inputFocused ? (<View style={{flex: 1}}></View>) : null}
			{
				matches.length > 0 ?
				(
					<FlatList data={matches} renderItem={renderItem} keyExtractor={item => item.id} style={styles.searchSuggestionsContainer} />
				) : null
			}
			<View style={styles.searchInputContainer}>
				<SVGComponent img={searchInput}/>
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
export default TextSearch;

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
		marginBottom: 12,
		flexGrow: 0
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


