import React from 'react';
import NavBar from './NavBar';
import StagesGame from './StagesGame';
import City1 from '../assets/images/city1.png';
import City2 from '../assets/images/city2.png';
import City3 from '../assets/images/city3.png';
function Levels() {
	return (
		<div>
			<StagesGame cityImage1={City1} cityImage2={''} cityImage3={''} />
		</div>
	);
}

export default Levels;
