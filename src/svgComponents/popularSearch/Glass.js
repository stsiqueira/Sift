import React from 'react';
import { SvgXml } from "react-native-svg"

const Glass = () => {
	const svgMarkup = `
	<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="80" height="80" rx="5" fill="#999999"/>
		<path d="M41.2083 4H35.25C34.9444 4 34.3333 4.22903 34.3333 5.14516C34.3333 6.36667 34.6389 6.67204 34.7917 6.67204V7.05376C34.7917 11.329 34.588 17.7419 33.875 20.414C32.9583 23.8495 27 32.629 27 38.3548V72.328C27 74.1602 28.8333 74.8728 29.75 75H44.4167C47.7167 75 48.8472 73.2186 49 72.328V37.9731C49 33.0108 43.5 23.4677 42.5833 20.414C41.6667 17.3602 41.2083 6.67204 41.6667 6.67204C42.125 6.67204 42.125 6.29032 42.125 5.14516C42.125 4.22903 41.5139 4 41.2083 4Z" fill="white"/>
	</svg>
	`;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;
	return (<SvgImage />);
}

export default Glass
