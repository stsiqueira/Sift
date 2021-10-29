import React from 'react';
import { SvgXml } from "react-native-svg"

const GlassBin = () => {
	const svgMarkup = `
	<svg width="157" height="118" viewBox="0 0 157 118" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.0896 8.80615H142.657L135.241 108.74C134.853 113.962 130.504 118 125.268 118H31.9725C26.7557 118 22.4153 113.99 22.0037 108.789L14.0896 8.80615Z" fill="#999999"/>
		<rect width="156.746" height="10.5672" rx="3" fill="#999999"/>
		<path d="M67.0223 25.8741L60.4075 37.4657L59.4201 39.157C58.56 40.6304 59.948 42.3978 61.5753 41.9013L65.6563 40.6564C66.6835 40.343 67.7617 40.9611 68.0152 42.0086L68.7934 45.2235C69.1901 46.8623 71.3709 47.1845 72.2208 45.7299L77.5586 36.5945L83.8318 47.3168L82.0537 48.3837C80.6507 49.2256 80.9242 51.3428 82.4947 51.7974L95.3062 55.5058C96.3019 55.794 97.3411 55.2135 97.6223 54.2119L101.441 40.6089C101.9 38.9739 100.131 37.6168 98.6808 38.4908L96.0445 40.0792L87.8951 25.8728C87.7759 25.6651 87.5554 25.5371 87.3168 25.5371H67.6013C67.3621 25.5371 67.1412 25.6657 67.0223 25.8741Z" fill="white"/>
		<path d="M113.506 70.208L106.817 58.6598L105.852 56.9554C105.011 55.4707 102.793 55.7941 102.408 57.4575L101.441 61.629C101.197 62.6789 100.125 63.3075 99.0951 63.0043L95.9334 62.0736C94.3217 61.5991 92.9534 63.3345 93.7829 64.801L98.9927 74.0107L86.6089 74.1049L86.5778 72.0251C86.5532 70.3841 84.5905 69.5633 83.4132 70.7017L73.8092 79.9889C73.0628 80.7107 73.0438 81.9047 73.7671 82.65L83.5895 92.7722C84.7701 93.9888 86.8246 93.1296 86.7961 91.4311L86.7444 88.3443L103.071 88.3604C103.31 88.3607 103.53 88.2329 103.65 88.0254L113.508 70.8801C113.627 70.6721 113.627 70.4157 113.506 70.208Z" fill="white"/>
		<path d="M52.7958 87.8472L66.1002 87.8038L68.0525 87.8168C69.7533 87.8281 70.5835 85.7374 69.3417 84.5704L66.2275 81.6439C65.4437 80.9073 65.4376 79.6606 66.2142 78.9164L68.5978 76.6322C69.8128 75.4678 69.0003 73.4102 67.3208 73.3984L56.7732 73.3242L62.8839 62.5076L64.6931 63.5204C66.1206 64.3196 67.8099 63.0231 67.4167 61.4301L64.2092 48.4346C63.9599 47.4245 62.9396 46.8111 61.9352 47.0674L48.2944 50.5482C46.6548 50.9666 46.3686 53.1828 47.8476 54.0073L50.5357 55.5058L42.3583 69.6961C42.2388 69.9035 42.2387 70.1593 42.358 70.3668L52.2157 87.5121C52.3353 87.7201 52.5566 87.8479 52.7958 87.8472Z" fill="white"/>
	</svg>
	`;
	const SvgImage = () => <SvgXml xml={svgMarkup} />;
	return (<SvgImage />);
}

export default GlassBin