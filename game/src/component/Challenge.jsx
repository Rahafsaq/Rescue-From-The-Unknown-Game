// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Arrow from '../assets/images/arrow.png';
// import Map from '../assets/images/green-map_1.png';
// import StagesChallenge from './stagesChallenge.js';
// // import GreenBG from "../assets/images/greenBG.png";
// function Challenge() {
// 	const [InputAnswer, setInputAnswer] = useState('');
// 	const [btnAnswer, setBtnAnswer] = useState('');
// 	const [backToMap, setBackToMap] = useState(false);
// 	const [message, setMessage] = useState('');

// 	const { challengeId } = useParams();
// 	const Challenge = StagesChallenge.find((item) => item.challengeId == challengeId);

// 	const isCorrect = Challenge.keyAnswer === InputAnswer.trim() || Challenge.keyAnswer === btnAnswer.trim();

// 	const handleCheckAnswer = (e) => {
// 		e.preventDefault();

// 		// Check if the answer is correct
// 		const isCorrect = Challenge.keyAnswer === InputAnswer.trim() || Challenge.keyAnswer === btnAnswer.trim();
// 		if (isCorrect) {
// 			// alert('إجابة صحيحة!');
// 			setBackToMap(true);
// 			setMessage('اجابة صحيحة');
// 		} else {
// 			alert('إجابة خاطئة! حاول مرة أخرى.');
// 		}
// 	};

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Arrow from '../assets/images/arrow.png';
import Map from '../assets/images/green-map_1.png';
import newBgChallenge from '../assets/newChallengeBg.png';
import StagesChallenge from './stagesChallenge.js';

function Challenge() {
	const { challengeId } = useParams();
	const Challenge = StagesChallenge.find((item) => item.challengeId == challengeId);

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

	return (
		<div
			className='flex justify-center items-center  h-[100vh]  bg-[rgba(179,97,97,0.6)]'
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
						<div className='relative p-4 rounded-3xl shadow bg-[#5B776D] h-[80vh] w-[60vw] dark:bg-gray-800 md:p-8'>
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

								<h3 className='mb-3 text-2xl text-center font-bold text-white dark:text-white font-primary'>
									ابدأ {Challenge.name}
								</h3>
								{/* <button className='bg-red-500 text-white'>العودة للخريطة</button> */}
								{backToMap && (
									<div>
										<Link to={'/Stagel'}>
											<button className='py-2 px-4 text-sm text-center text-white rounded-lg bg-red-500 sm:w-auto font-secondary font-semibold'>
												العودة للخريطة
											</button>
										</Link>
										<p className='bg-fuchsia-900'>{message}</p>
									</div>
								)}

								<p className='text-white font-semibold text-center leading-9 mt-8 text-lg font-secondary'>
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
								<div className='w-full flex justify-center p-4'>
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
////////////////////////////////////////////////////////////////////////////////
{
	/* start section */
}

// https://mail.google.com/mail/u/0?ui=2&ik=0e14fdc281&attid=0.1&permmsgid=msg-a:r-126004638921908052&th=18cc4c0b69a7cec1&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-XavAivVMimBK-o0KCs5WEGcp5ypPVgvG6XsGTsh61QBJNiJJZhxvT4m_B-Ur6iXIWOQBYIGQOEjxBQUSORG5QYC4EGQAH0oMtysW0rVPLzLj9aDLy-HeKWQA&disp=emb&realattid=18cc4c0a9ba80918f341

// {/* image Background */}
// <div
//   className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen max-sm:overflow-auto max-md:overflow-auto"
//   style={{
//     backgroundImage: `url(${Map360})`,
//     backgroundSize: `cover`,
//     backgroundPosition: `center`,
//     // filter: "blur(3px)",
//   }}
// >
//   <div
//     className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed max-sm:overflow-auto max-md:overflow-auto"
//     style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
//   >
//     {/* Start Modal window */}
//     <div className="flex justify-center items-center h-[100vh] ">
//       <div className="relative z-10 p-4 w-full max-w-lg h-full md:h-auto">
//         <div
//           className="relative p-4  rounded-lg shadow dark:bg-gray-800 md:p-8 bg-cover bg-no-repeat"
//           style={{
//             backgroundImage: `url(${GreenBG})`,
//             backgroundSize: `cover`,
//             backgroundPosition: `center`,
//             // filter: "blur(3px)",
//           }}
//         >
//           <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
//             <div className="text-white absolute right-6 top-3 font-normal text-2xl">
//               X
//             </div>

//             <h3 className="mb-3 text-lg font-medium text-white dark:text-white">
//               ابدأ التحدي:
//             </h3>
//             <p className="text-white font-bold leading-9 text-2xl">
//               {" "}
//               ما المقصود من الرموز؟{" "}
//             </p>
//             <div>
//               <img src={Q1} alt="q1-img" />
//             </div>
//           </div>
//           {/* input */}
//           <div>
//             <input
//               type="text"
//               placeholder="اكتب هنا"
//               className="border border-none text-center rounded-sm mb-6 outline-none"
//             />
//           </div>
//           <div className="flex justify-center items-center pt-0 space-y-4 sm:flex sm:space-y-0">
//             <div className="flex justify-center items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
//               <Link to={"/FindChar"}>
//                 {" "}
//                 <button
//                   id="confirm-button"
//                   type="button"
//                   className="py-2 px-11 w-full text-sm font-medium text-center text-white rounded-lg bg-[#8D3333] sm:w-auto"
//                 >
//                   تحقق
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* End Modal window */}
//   </div>
// </div>

// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

// export default function App() {
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();

//   return (
//     <>
//       <Button onPress={onOpen} color="secondary">Open Modal</Button>
//       <Modal
//         backdrop="opaque"
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         radius="lg"
//         classNames={{
//           body: "py-6",
//           backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
//           base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
//           header: "border-b-[1px] border-[#292f46]",
//           footer: "border-t-[1px] border-[#292f46]",
//           closeButton: "hover:bg-white/5 active:bg-white/10",
//         }}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
//               <ModalBody>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam pulvinar risus non risus hendrerit venenatis.
//                   Pellentesque sit amet hendrerit risus, sed porttitor quam.
//                 </p>
//                 <p>
//                   Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
//                   dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
//                   Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
//                   Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
//                   proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
//                 </p>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="foreground" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Arrow from '../assets/images/arrow.png';
// import Map from '../assets/images/green-map_1.png';
// import StagesChallenge from './stagesChallenge.js';
// // import GreenBG from "../assets/images/greenBG.png";
// function Challenge() {
// 	let index = 0;
// 	const [InputAnswer, setInputAnswer] = useState('');
// 	const [btnAnswer, setBtnAnswer] = useState('');
// 	const [backToMap, setBackToMap] = useState(false);
// 	const [message, setMessage] = useState('');
// 	const [currentIndex, setCurrentIndex] = useState('');
// 	// const [currentIndex, setCurrentIndex] = useState(() => {
// 	// 	const storedIndex = localStorage.getItem('index');
// 	// 	return storedIndex ? parseInt(storedIndex) : 0;
// 	// });

// 	// React.useEffect(() => {
// 	// 	// const indexObj = localStorage.setItem('index', currentIndex.toString());
// 	const indexObj = localStorage.getItem('index', currentIndex);
// 	const x = JSON.parse(indexObj);

// 	console.log('useeffect', x);
// 	// }, [currentIndex]);

// 	console.log(x);
// 	const { challengeId } = useParams();
// 	const Challenge = StagesChallenge.find((item) => item.challengeId == challengeId);

// 	// const isCorrect = Challenge.keyAnswer === InputAnswer.trim() || Challenge.keyAnswer === btnAnswer.trim();

// 	const handleCheckAnswer = (e) => {
// 		e.preventDefault();

// 		// Check if the answer is correct
// 		const isCorrect = Challenge.keyAnswer === InputAnswer.trim() || Challenge.keyAnswer === btnAnswer.trim();
// 		if (isCorrect) {
// 			// const indexStr = localStorage.setItem('index', currentIndex);
// 			// const y = JSON.stringify(indexStr);
// 			const y = localStorage.setItem('index', JSON.stringify(indexObj));
// 			// alert('إجابة صحيحة!');
// 			setBackToMap(true);
// 			setMessage('اجابة صحيحة');
// 			setCurrentIndex(y + 1);
// 			// index++;
// 		} else {
// 			alert('إجابة خاطئة! حاول مرة أخرى.');
// 		}
// 	};

// 	return (
// 		<>
// 			{/* start section */}
// 			<section className='min-h-screen w-screen'>
// 				{/* <div
//           className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen max-sm:overflow-auto max-md:overflow-auto"
//           style={{
//             backgroundImage: `url(https://mail.google.com/mail/u/0?ui=2&ik=0e14fdc281&attid=0.1&permmsgid=msg-a:r-126004638921908052&th=18cc4c0b69a7cec1&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-XavAivVMimBK-o0KCs5WEGcp5ypPVgvG6XsGTsh61QBJNiJJZhxvT4m_B-Ur6iXIWOQBYIGQOEjxBQUSORG5QYC4EGQAH0oMtysW0rVPLzLj9aDLy-HeKWQA&disp=emb&realattid=18cc4c0a9ba80918f341)`,
//             backgroundSize: `cover`,
//             backgroundPosition: `center`,
//             // filter: "blur(3px)",
//           }}
//         >
//           <div
//             className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed max-sm:overflow-auto max-md:overflow-auto"
//             style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
//           > */}
// 				<div className='flex justify-center items-center h-[100vh]'>
// 					<div className='relative z-10 p-4 w-full max-w-lg h-full md:h-auto'>
// 						<div className='relative p-4 rounded-3xl shadow bg-[#5B776D] dark:bg-gray-800 md:p-8 w-min'>
// 							<div className='absolute left-0 top-0 w-[60%] object-fit'>
// 								<img src={Map} alt='map-left' className='opacity-25' />
// 							</div>
// 							<div className='absolute bottom-0 right-0 w-[60%] object-fit'>
// 								<img src={Map} alt='map-right' className='opacity-25' />
// 							</div>
// 							<div className='absolute bottom-0 left-0 rotate-180 w-[20%] object-fit'>
// 								<img src={Arrow} alt='Arrow' className='' />
// 							</div>
// 							<div className='z-10 relative mb-4 text-sm font-light text-gray-500 dark:text-gray-400'>
// 								<div className='text-white text-center absolute right-2 top-0 font-normal cursor-pointer text-2xl'>
// 									X
// 								</div>

// 								<h3 className='mb-3 text-2xl text-center font-bold text-white dark:text-white font-primary'>
// 									ابدأ {Challenge.name}
// 								</h3>
// 								{/* <button className='bg-red-500 text-white'>العودة للخريطة</button> */}
// 								{backToMap && (
// 									<div>
// 										<Link to={'/Stagel'}>
// 											<button className='py-2 px-4 text-sm text-center text-white rounded-lg bg-red-500 sm:w-auto font-secondary font-semibold'>
// 												العودة للخريطة
// 											</button>
// 										</Link>
// 										<p className='bg-fuchsia-900'>{message}</p>
// 									</div>
// 								)}

// 								<p className='text-white font-semibold text-center leading-9 text-lg font-secondary'>
// 									{Challenge.question}
// 								</p>
// 							</div>
// 							{/* images */}
// 							<div className='flex justify-center w-full'>
// 								<img src={Challenge.image} alt='q1-img' className='relative z-10 w-[30vw]' />
// 							</div>
// 							{Challenge.options.length > 0 ? (
// 								<div className='flex w-full justify-center gap-4 mt-5 mb-4'>
// 									{Challenge.options.map((option) => (
// 										<button
// 											value={option}
// 											onClick={(e) => setBtnAnswer(e.target.value)}
// 											className='flex justify-center items-center bg-[#E9D6AD] text-gray-600 w-[12vw] p-1 rounded-lg relative z-10 font-secondary'
// 										>
// 											{option}
// 										</button>
// 									))}
// 								</div>
// 							) : (
// 								<div className='w-full flex justify-center p-4'>
// 									<input
// 										name='answer'
// 										value={InputAnswer}
// 										onChange={(e) => setInputAnswer(e.target.value)}
// 										type='text'
// 										placeholder='ادخل اجابتك'
// 										className='text-center  placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA] max-sm:w-[45vw] font-secondary'
// 									/>
// 								</div>
// 							)}
// 							<div className='z-10 relative flex justify-center items-center pt-0 space-y-4 sm:flex sm:space-y-0'>
// 								<div className='flex justify-center items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0'>
// 									<button
// 										onClick={handleCheckAnswer}
// 										id='confirm-button'
// 										type='button'
// 										className='py-2 px-11 w-full text-sm  text-center text-white rounded-lg bg-[#8D3333] sm:w-auto font-secondary font-semibold'
// 									>
// 										تحقق{' '}
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				{/* </div>
//         </div> */}
// 			</section>
// 		</>
// 	);
// }

// export default Challenge;
