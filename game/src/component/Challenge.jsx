import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import celebrate from '../assets/celebrate.gif';
import Arrow from '../assets/images/arrow.png';
import Map from '../assets/images/green-map_1.png';
import newBgChallenge from '../assets/newChallengeBg.png';
import StagesChallenge from './stagesChallenge.js';
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
			className='flex flex-col justify-center items-center h-[100vh] max-sm:justify-center '
			style={{
				backgroundImage: `url(${newBgChallenge})`,
			}}
		>
			{/* start section */}
			<section className='h-[80vh] w-scree  max-sm:h-[92vh]'>
				<div className='flex justify-center items-center h-[80vh]'>
					<div className='flex justify-center relative z-10 p-4  w-[100vw] h-[70vh] md:h-auto '>
						<div className='relative p-4 rounded-3xl shadow bg-[#bdbcbc] h-[80vh] w-[60vw] dark:bg-gray-800 md:p-8 max-sm:w-[85vw] max-sm:h-[75vh]'>
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

								<h3 className='mb-3 text-2xl text-center font-bold text-black dark:text-white font-primary max-sm:mt-6'>
									ابدأ التحدي
								</h3>
								<p className='text-black font-semibold text-center leading-9 mt-8 text-lg font-secondary max-sm:mt-4'>
									{Challenge.question}
								</p>
							</div>
							{/* images */}
							<div className='flex justify-center w-full'>
								<img
									src={Challenge.image}
									alt='q1-img'
									className='relative z-10 w-[15vw]  max-sm:w-[35vw]'
								/>
							</div>
							{Challenge.options.length > 0 ? (
								<div className='flex w-full justify-center gap-4 mt-5 mb-4'>
									{Challenge.options.map((option) => (
										<button
											value={option}
											onClick={(e) => setBtnAnswer(e.target.value)}
											className='flex justify-center items-center bg-[#E9D6AD] text-gray-600 w-[12vw] p-1 rounded-lg relative z-10 font-secondary selectedButton'
										>
											{option}
										</button>
									))}
								</div>
							) : (
								<div className='w-full flex justify-center p-4 mt-6 '>
									<input
										name='answer'
										value={InputAnswer}
										onChange={(e) => setInputAnswer(e.target.value)}
										type='text'
										autoComplete='off'
										placeholder='ادخل اجابتك'
										className='text-center  placeholder:p-1 p-1 rounded-lg bg-white max-sm:w-[45vw] font-secondary'
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
								<div className='w-[50vw] flex  justify-start items-center max-sm:w-[90vw] max-sm:mr-6 '>
									<img
										src={celebrate}
										className='w-[12vw] mr-10 max-sm:w-[30vw] max-sm:mr-0'
										alt=''
									/>
									<div className='flex justify-center gap-2 items-center max-sm:flex-col-reverse max-sm:w-[25vw]'>
										<button
											onClick={handleWin}
											className='text-center text-xl rounded-lg text-[#8D3333] sm:w-auto font-secondary font-semibold max-sm:text-xs'
										>
											اضغط للعودة للخريطة
										</button>
										<p className='text-center text-black font-bold text-xl font-primary max-sm:text-xs'>
											{message}
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Challenge;
