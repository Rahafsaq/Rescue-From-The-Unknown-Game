import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import Arrow from '../assets/images/arrow.png';
import Map from '../assets/images/green-map_1.png';
import newBgChallenge from '../assets/newChallengeBg.png';

function Popup3(props) {
	const charName = localStorage.getItem('name');
	const charImage = localStorage.getItem('image');
	const id = localStorage.getItem('id');
	console.log(id);
	const [cityname, setCityname] = useState('');
	const [charname, setcharname] = useState('');
	useEffect(() => {
		axios
			.get(`https://658d2e7c7c48dce94738a443.mockapi.io/gamedate/${id}`)

			.then((res) => {
				console.log(res.data);
				setCityname(res.data.cityname);
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(`https://658d2e7c7c48dce94738a443.mockapi.io/characters/${id}`)

			.then((res) => {
				console.log(res.data);
				setcharname(res.data.name);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{/* start section */}
			<section
				className='min-h-screen w-screen '
				style={{
					backgroundImage: `url(${newBgChallenge})`,
				}}
			>
				<div className='flex justify-center items-center h-[100vh] '>
					<div className='relative z-10 p-4 w-full max-w-lg h-full md:h-auto max-sm:flex max-sm:flex-col max-sm:justify-center  max-sm:items-center '>
						<div className='relative p-4 rounded-3xl shadow bg-[#bdbcbc] dark:bg-gray-800 md:p-8 max-sm:w-[90vw] max-sm:h-[35vh] '>
							<div className='absolute left-0 top-0 w-[60%] object-fit'>
								<img src={Map} alt='map-left' className='opacity-25' />
							</div>
							<div className='absolute bottom-0 right-0 w-[60%] object-fit'>
								<img src={Map} alt='map-right' className='opacity-25' />
							</div>
							<div className='absolute bottom-0 left-0 rotate-180 w-[20%] object-fit'>
								<img src={Arrow} alt='Arrow' className='' />
							</div>
							<div className='z-10 relative mb-4 text-sm font-light text-gray-500 dark:text-gray-400'>
								<div className='text-white text-center absolute right-2 top-0 font-normal cursor-pointer text-2xl'>
									X
								</div>

								<h3 className='mb-3 text-2xl text-center font-bold text-white dark:text-white'>
									مرحبا بك في {cityname}
								</h3>
								<p className='text-white font-medium text-center leading-9 text-lg'>
									:ابحث عن {charName} في
								</p>
								<p className='text-white font-medium text-center leading-9 text-lg'>
                                    {props.hints}
								</p>
								<p className='text-white font-medium text-center leading-9 text-lg'>
                                    {props.hints2}
								</p>
							</div>
							<div className='z-10 relative flex justify-center items-center pt-0 space-y-4 sm:flex sm:space-y-0'>
								<div className='flex justify-center items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0'>
									<Link to={'/Stagelll'}>
										<button
											id='confirm-button'
											type='button'
											className='py-2 px-11 w-full text-sm font-medium text-center text-white rounded-lg bg-[#8D3333] sm:w-auto'>
											ابدأ
										</button>
									</Link>
								</div>
							</div>


						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Popup3;
