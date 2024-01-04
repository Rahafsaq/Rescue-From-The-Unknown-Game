import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Errorpage from '../Pages/Errorpage.jsx';
import Homepage from '../Pages/Homepage';
import Characters from '../component/Characters.jsx';
import ExplainGame from '../component/ExplainGame.jsx';
import Hint1 from '../component/Hint1.jsx';
import Hint2 from '../component/Hint2.jsx';
import Hint3 from '../component/Hint3.jsx';
import Popup from '../component/Popup.jsx';
import StagesGame from '../component/StagesGame.jsx';
import Challenge from './Challenge.jsx';
import FindChar from './FindChar.jsx';
import Levle2 from './Levle2.jsx';
import Levle3 from './Levle3.jsx';
import Stagel from './Stagel.jsx';
import Stagell from './Stagell.jsx';
import Stagelll from './Stagelll.jsx';
import StreetViewMap from './StreetViewMap.jsx';

function AllRoute() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/Characters' element={<Characters />} />
				<Route path='/StagesGame' element={<StagesGame />} />
				<Route path='/ExplainGame' element={<ExplainGame />} />
				<Route path='/Popup' element={<Popup />} />
				<Route path='/FindChar' element={<FindChar />} />
				<Route path='/Challenge' element={<Challenge />} />
				<Route path='/*' element={<Errorpage />} />
				<Route path='/Challenge/:challengeId' element={<Challenge />} />
				<Route path='/StreetViewMap' element={<StreetViewMap />} />
				<Route path='/Stagel' element={<Stagel />} />
				<Route path='/Stagell' element={<Stagell />} />
				<Route path='/Stagelll' element={<Stagelll />} />
				<Route path='/Levle2' element={<Levle2 />} />
				<Route path='/Levle3' element={<Levle3 />} />
				<Route path='/Hint2' element={<Hint2 />} />
				<Route path='/Hint3' element={<Hint3 />} />
				<Route path='/Hint1' element={<Hint1 />} />
			</Routes>
		</div>
	);
}

export default AllRoute;
