import React from 'react';
import { SvgXml } from "react-native-svg"

const SearchInput = () => {
	const svgMarkup = `
	<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="40" height="40" rx="4" fill="#2E60A3"/>
		<path d="M23.0034 21.0034L27.6198 25.6198" stroke="white" stroke-width="2" stroke-linecap="round"/>
		<circle cx="17.2328" cy="15.2328" r="7.73285" fill="#2E60A3" stroke="white" stroke-width="3"/>
		<rect x="26.3313" y="21.0034" width="12.2593" height="4.70649" rx="2" transform="rotate(45 26.3313 21.0034)" fill="white"/>
	</svg>
	`;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;
	return (<SvgImage />);
}

export default SearchInput
