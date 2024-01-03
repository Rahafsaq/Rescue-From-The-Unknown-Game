import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Arrow from '../assets/images/arrow.png';
import Map from '../assets/images/green-map_1.png';
import newBgChallenge from '../assets/newChallengeBg.png';
import StagesChallenge from './stagesChallenge.js';
import celebrate from '../assets/celebrate.gif';
function Challenge() {
	const { challengeId } = useParams();
	const Challenge = StagesChallenge.find((item) => item.challengeId == challengeId);
	const navigate = useNavigate();
	const [InputAnswer, setInputAnswer] = useState('');
	const [btnAnswer, setBtnAnswer] = useState('');
	const [backToMap, setBackToMap] = useState(false);
	const [message, setMessage] = useState('');
	const [score, setScore] = useState(() => {
		const storedScore = localStorage.getItem('score');
		return storedScore ? parseInt(storedScore, 10) : 0;
	});

	const handleCheckAnswer = (e) => {
		e.preventDefault();

		const isCorrect = Challenge.keyAnswer === InputAnswer.trim() || Challenge.keyAnswer === btnAnswer.trim();
		if (isCorrect) {
			setBackToMap(true);
			setMessage('اجابة صحيحة');
			setScore((prevScore) => prevScore + 1);
			localStorage.setItem('score', score + 1);
		} else {
			alert('إجابة خاطئة! حاول مرة أخرى.');
		}
	};

	useEffect(() => {
		const storedScore = localStorage.getItem('score');
		if (storedScore) {
			setScore(parseInt(storedScore, 10));
		}
	}, []);

	const handleWin = () => {
		if (Challenge.stage == '1') {
			navigate('/Stagel');
		} else if (Challenge.stage == '2') {
			navigate('/Stagell');
		} else {
			navigate('/Stagelll');
		}
	};

	return (
		<div
			className='flex flex-col justify-center items-center  h-[100vh]  bg-[rgba(179,97,97,0.6)]'
			style={{
				backgroundImage: `url(${newBgChallenge})`,
				// backgroundSize: cover,
				// backgroundPosition: center,
			}}
		>
			{/* start section */}
			<section className='h-[80vh] w-scree'>
				<div className='flex justify-center items-center h-[80vh]'>
					<div className='flex justify-center relative z-10 p-4  w-[100vw] h-[70vh] md:h-auto '>
						<div className='relative p-4 rounded-3xl shadow bg-[#e6eceb] h-[80vh] w-[60vw] dark:bg-gray-800 md:p-8'>
							<div className='absolute left-0 top-0 w-[60%] object-fit'>
								<img src={Map} alt='map-left' className='opacity-25' />
							</div>
							<div className='absolute bottom-0 right-0 w-[60%] object-fit'>
								<img src={Map} alt='map-right' className='opacity-25' />
							</div>
							<div className='absolute bottom-0 left-0 rotate-180 w-[20%] object-fit'>
								<img src={Arrow} alt='Arrow' className='' />
							</div>
							<div className='z-10 relative mb-4 text-sm font-light text-gray-600 dark:text-gray-400'>
								<div className='text-black text-center absolute right-2 top-0 font-normal cursor-pointer text-2xl'>
									X
								</div>

								<h3 className='mb-3 text-2xl text-center font-bold text-black dark:text-white font-primary'>
									ابدأ {Challenge.name}
								</h3>
								{/* <button className='bg-red-500 text-white'>العودة للخريطة</button> */}
								{/* {backToMap && (
									<div className='w-full flex justify-center items-center'>
										<Link to={'/Stagel'}>
											<button className='py-2 px-4 text-sm text-center text-white rounded-lg bg-[#8D3333] sm:w-auto font-secondary font-semibold'>
												العودة للخريطة
											</button>
										</Link>
										<p className='text-center text-black font-bold text-2xl '>{message}</p>
									</div>
								)} */}

								<p className='text-black font-semibold text-center leading-9 mt-8 text-lg font-secondary'>
									{Challenge.question}
								</p>
							</div>
							{/* images */}
							<div className='flex justify-center w-full'>
								<img src={Challenge.image} alt='q1-img' className='relative z-10 w-[15vw]' />
							</div>
							{Challenge.options.length > 0 ? (
								<div className='flex w-full justify-center gap-4 mt-5 mb-4'>
									{Challenge.options.map((option) => (
										<button
											value={option}
											onClick={(e) => setBtnAnswer(e.target.value)}
											className='flex justify-center items-center bg-[#E9D6AD] text-gray-600 w-[12vw] p-1 rounded-lg relative z-10 font-secondary'
										>
											{option}
										</button>
									))}
								</div>
							) : (
								<div className='w-full flex justify-center p-4 mt-6'>
									<input
										name='answer'
										value={InputAnswer}
										onChange={(e) => setInputAnswer(e.target.value)}
										type='text'
										autoComplete='off'
										placeholder='ادخل اجابتك'
										className='text-center  placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA] max-sm:w-[45vw] font-secondary'
									/>
								</div>
							)}
							<div className='z-10 relative flex justify-center items-center pt-0 space-y-4 sm:flex sm:space-y-0'>
								<div className='flex justify-center items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0'>
									<button
										onClick={handleCheckAnswer}
										id='confirm-button'
										type='button'
										className='py-2 px-11 w-full text-sm  text-center text-white rounded-lg bg-[#8D3333] sm:w-auto font-secondary font-semibold'
									>
										تحقق{' '}
									</button>
								</div>
							</div>
							{backToMap && (
								<div className='w-full flex justify-center items-center'>
									<button
										onClick={handleWin}
										className='py-2 px-4 text-sm text-center text-white rounded-lg bg-[#8D3333] sm:w-auto font-secondary font-semibold'
									>
										العودة للخريطة
									</button>

									<p className='text-center text-black font-bold text-2xl '>{message}</p>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* </div>
        </div> */}
			</section>
		</div>
	);
}

export default Challenge;
