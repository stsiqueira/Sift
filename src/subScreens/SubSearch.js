import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import PopularSearch from '../subcomponents/PopularSearch'
import TextSearch from '../subcomponents/TextSearch'

const SubSearch = props => {
	const [inputFocused, setInputFocused] = useState(false)

	const handleInputFocused = () => {
		setInputFocused(true)
	}

	const handleInputBlurred = () => {
		setInputFocused(false)
	}

	const setShowCancelButton = props.route.params.setShowCancelButton

	return (
    <ScrollView
			contentContainerStyle={!inputFocused ? styles.container : styles.containerSearching}
			scrollEnabled={true}
			showsVerticalScrollIndicator={true}
			keyboardShouldPersistTaps={"always"}
			keyboardDismissMode='on-drag'
		>
			{
				!inputFocused ?
				(
					<>
						<PopularSearch
							navigation={props.navigation}
						/>
						<View style={styles.seperatorContainer}>
							<View style={styles.seperatorLine}></View>
							<Text style={styles.seperatorText}>or</Text>
							<View style={styles.seperatorLine}></View>
						</View>
					</>
				) : null
			}
			<TextSearch
				handleInputFocused={handleInputFocused}
				handleInputBlurred={handleInputBlurred}
				navigation={props.navigation}
				setShowCancelButton={setShowCancelButton}
			/>
    </ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#f3f4f8',
		// justifyContent: 'flex-start',
		// flex: 1
	},
	containerSearching: {
		padding: 20,
		backgroundColor: '#f3f4f8',
		justifyContent: 'flex-start',
		flex: 1
	},
	seperatorContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 30,
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
	},
	displayNone: {
		display: 'none'
	}
});

export default SubSearch
