import React from 'react';
import { SvgXml } from "react-native-svg"

const OrganicBin = () => {
	const svgMarkup = `
	<svg width="162" height="118" viewBox="0 0 162 118" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.4786 8.80615H146.595L138.973 108.761C138.576 113.973 134.23 118 129.002 118H32.58C27.3715 118 23.0352 114.002 22.6129 108.811L14.4786 8.80615Z" fill="#48B47B"/>
		<rect width="161.074" height="10.5672" rx="3" fill="#48B47B"/>
		<path d="M73.4471 61.9042V77.3803L94.9333 62.0061C105.429 54.4957 111.657 42.3824 111.657 29.4761V19.8355C111.657 17.3943 108.896 15.9752 106.911 17.3958L90.1705 29.3742C79.6745 36.8846 73.4471 48.9979 73.4471 61.9042Z" fill="white"/>
		<path d="M75.1836 84.7667V88.3663L65.1162 81.0799C55.6219 74.2083 50 63.1994 50 51.4793C50 49.2424 52.5352 47.9477 54.3473 49.2592L58.636 52.3633C69.0293 59.8856 75.1836 71.9368 75.1836 84.7667Z" fill="white"/>
		<rect x="70.8415" y="67.2393" width="4.342" height="38.0282" rx="2.171" fill="white"/>
	</svg>
	`;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;
	return (<SvgImage />);
}

export default OrganicBin
