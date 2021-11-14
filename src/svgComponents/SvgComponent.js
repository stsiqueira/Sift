import React from 'react';
import { SvgXml } from "react-native-svg"

const SVGComponent = (props) => {
	const svgMarkup = props.img;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;

	return ( <SvgImage /> );
}

export default SVGComponent
