import React from 'react';
import { SvgXml } from "react-native-svg"

const GarbageBin = () => {
	const svgMarkup = `
	<svg width="175" height="132" viewBox="0 0 175 132" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.73 9.83057H159.263L150.904 122.475C150.516 127.697 146.167 131.735 140.931 131.735H34.619C29.4021 131.735 25.0618 127.725 24.6502 122.524L15.73 9.83057Z" fill="black"/>
		<rect width="174.992" height="11.7972" rx="3" fill="black"/>
		<rect x="71" y="30.8452" width="33" height="33" transform="rotate(-24.8067 71 30.8452)" fill="white"/>
		<rect x="58.4727" y="66.9995" width="26.6668" height="26.6668" transform="rotate(3.16596 58.4727 66.9995)" fill="white"/>
		<rect x="100.681" y="94.9995" width="14.1587" height="14.1587" transform="rotate(32.8538 100.681 94.9995)" fill="white"/>
	</svg>
	`;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;
	return (<SvgImage />);
}

export default GarbageBin
