import React from 'react';
import { SvgXml } from "react-native-svg"

const PaperBin = () => {
	const svgMarkup = `
	<svg width="175" height="132" viewBox="0 0 175 132" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.73 9.83057H159.263L150.904 122.475C150.516 127.697 146.167 131.735 140.931 131.735H34.619C29.4021 131.735 25.0618 127.725 24.6502 122.524L15.73 9.83057Z" fill="#F2BE15"/>
		<rect width="174.992" height="11.7972" rx="3" fill="#F2BE15"/>
		<path d="M50.8085 112.957V23.2407C50.8085 20.4793 53.0471 18.2407 55.8085 18.2407H97.8362C99.1505 18.2407 100.412 18.7582 101.348 19.6813L124.107 42.1335C125.059 43.0731 125.595 44.3551 125.595 45.693V112.957C125.595 115.718 123.357 117.957 120.595 117.957H55.8085C53.047 117.957 50.8085 115.718 50.8085 112.957Z" fill="white" stroke="#F2BE15" stroke-width="3" stroke-linecap="round"/>
		<path d="M100.667 18.2407V41.131C100.667 41.6833 101.114 42.131 101.667 42.131H125.596" stroke="#F2BE15" stroke-width="3" stroke-linecap="round"/>
		<line x1="61.6569" y1="29.2056" x2="91.8955" y2="29.2056" stroke="#F2BE15" stroke-width="3" stroke-linecap="round"/>
		<line x1="61.6569" y1="44.7856" x2="91.8955" y2="44.7856" stroke="#F2BE15" stroke-width="3" stroke-linecap="round"/>
		<line x1="61.429" y1="60.5181" x2="116.597" y2="60.5181" stroke="#F2BE15" stroke-width="3" stroke-linecap="round"/>
	</svg>
	`;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;
	return (<SvgImage />);
}

export default PaperBin
