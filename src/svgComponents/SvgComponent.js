import React from 'react';
import { SvgXml } from "react-native-svg"
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import * as svgImage from '../services/Images'

const SVGComponent = (props) => {
	const svgMarkup = props.img;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;

	return ( <SvgImage /> );
}

export default SVGComponent
