import React from 'react';
import { SvgXml } from "react-native-svg"

const Electronics = () => {
	const svgMarkup = `
	<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="80" height="80" rx="5" fill="#2C9CA4"/>
		<mask id="path-2-inside-1_265:1874" fill="white">
		<rect x="11" y="16" width="54" height="36.5556" rx="3"/>
		</mask>
		<rect x="11" y="16" width="54" height="36.5556" rx="3" stroke="white" stroke-width="10" mask="url(#path-2-inside-1_265:1874)"/>
		<rect x="21" y="57.7778" width="34" height="5.22222" rx="2.61111" fill="white"/>
		<rect x="34" y="50.4667" width="8" height="8.35556" fill="white"/>
	</svg>
	`;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;
	return (<SvgImage />);
}

export default Electronics
