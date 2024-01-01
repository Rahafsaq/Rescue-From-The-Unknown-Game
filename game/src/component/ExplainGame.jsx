import React from 'react';
import { Link } from 'react-router-dom';
import NFTbg from '../assets/images/NFT-landing.png';
import Trophy2 from '../assets/images/Trophy2.png';
import City2 from '../assets/images/city2.png';
import ManSearch from '../assets/images/man-search.png';
import SecondryBG from '../assets/images/secondryBG.png';
import { useParams } from "react-router-dom";
import char1 from '../assets/images/char1.png'
import medal from "../assets/medal.png";

import axios from 'axios';
import bgexplainplay from '../assets/images/bgexplainplay.png'


function ExplainGame() {


	return (
		<>
			{/* start section */}
			<section className='min-h-screen w-scree'>
				{/* image Background */}
				<div
					className=' bg-[#5B776D] relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen max-sm:overflow-auto max-md:overflow-auto'
					style={{
						backgroundImage: `url(${bgexplainplay})`,
						backgroundColor: `rgba(0, 0, 0, 0.0)`,


						backgroundSize: `cover`,
						backgroundPosition: `center`,
					}}
				>

					
					<div
						className=' bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex justify-center items-center max-sm:overflow-auto max-md:overflow-auto'
						style={{ backgroundColor: `rgba(0, 0, 0, 0.0)` }}
					>
						{/* Start explain game box  */}
						<div className='z-10 flex justify-center w-52 rounded-md p-2 font-bold text-white  absolute'>
							<p className='text-white text-2xl font-primary z-10  mb-80 '>طريقة اللعبة</p>
						</div>

						<div
							className='absolute w-8/12 h-4/5 flex justify-center items-center rounded-[30px] max-sm:h-full'
							style={{
								// backgroundImage: `url(${SecondryBG})`,
								backgroundSize: `cover`,
								backgroundPosition: `center`,
							}}
						>
							{/* Start Content explain box */}
							<div className='flex justify-center items-center text-white max-sm:flex max-sm:flex-col'>
								{/* Box1 */}
								<div className='h-56'>
									<img
										// src={`${Trophy2}`}
										src={`${medal}`}
										alt='ManSearch-img'
										className='mb-16 ml-4 mt-2'
										width={140}
									/>
									<div className='text-right  flex justify-center font-secondary '>
										<p className='w-44'>اكسب المرحلة لفتح مواقع جديدة</p>
									</div>
								</div>
								{/* Box2 */}
								<div className='flex flex-col justify-center items-center '>
									<img src={`${char1}`} alt='ManSearch-img' className=' ml-20 ' width={110} />
									<div className='text-right  flex justify-center font-secondary'>
										<p className='w-44 '>انطلق و ابدأ بالبحث وانقذ نسخ شخصيتك من السجن</p>
									</div>
								</div>
								{/* Box3 */}
								<div className=' flex-1 '>
									<img src={`${City2}`} alt='ManSearch-img' width={200} />
									<div className='text-right  flex justify-center'>
										<p className='w-44 font-secondary'>ستبدأ بالإنقال لموقع عشوائي على خرائط Google</p>
									</div>
								</div>
							</div>
							{/* Button */}

							<div className='z-10 flex justify-center w-52 rounded-md p-2 font-primary text-white  absolute bottom-8 bg-[#8D3333]'>
								{/* <Link to={`/Popup/${charname.id}`}> */}
								<Link to={`/Popup`}>
									<button>ابدأ اللعبة</button>
								</Link>
							</div>

							{/* End Content explain box */}
						</div>

						{/* End explain game box  */}
					</div>
				</div>

				{/* End section */}
			</section>
		</>
	);
}

export default ExplainGame;
