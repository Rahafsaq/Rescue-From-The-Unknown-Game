import React from 'react';
import NavBar from './NavBar';
import StreetViewMap from './StreetViewMap';

function Stagel() {



	return (
		<>
			<div className='absolute z-10 top-0 '>
				<NavBar totalChallenges={'1'} />
			</div>
			<StreetViewMap />
		</>
	);

}

export default Stagel;
