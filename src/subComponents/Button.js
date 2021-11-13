
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DefaultButton = (props) =>{

    return (
            <TouchableOpacity style={styles.buttonContainer} >
                <Text style={styles.button}>{props.name}</Text>
            </TouchableOpacity>
    )
}
export default DefaultButton

const styles = StyleSheet.create({
    buttonContainer: {
		backgroundColor: '#134075',
		textAlign: 'center',
		padding: 16,
		borderRadius: 5
	},
	button: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'Lato-Bold',
        textAlign:'center'
	},
});     