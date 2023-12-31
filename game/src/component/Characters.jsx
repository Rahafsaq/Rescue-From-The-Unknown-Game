import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import character1 from '../assets/character-1.png';
import character2 from '../assets/character-2.png';
import character3 from '../assets/character-3.png';
import character5 from '../assets/character-5.png';
import character6 from '../assets/character-6.png';
import character7 from '../assets/character-7.png';
import goldBackground from '../assets/gold-background.png';

// character click sounds
import character1Sound from '../assets/audio/character-1-sound.wav';
import character2Sound from '../assets/audio/character-2-sound.wav';
import character3Sound from '../assets/audio/character-3-sound.mp3';
import character5Sound from '../assets/audio/character-5-sound.wav';
import character6Sound from '../assets/audio/character-6-sound.wav';
import character7Sound from '../assets/audio/character-7-sound.wav';
function Characters() {
	const navigate = useNavigate();
	// map for characters with their corresponding audio files
	const characterAudioMap = {
		character1: character1Sound,
		character2: character2Sound,
		character3: character3Sound,
		character5: character5Sound,
		character6: character6Sound,
		character7: character7Sound,
	};

	// map of characters to their corresponding images
	const characterImages = {
		character1,
		character2,
		character3,
		character5,
		character6,
		character7,
	};

	// map for characters with their Sentence
	const characterSentence = {
		character1: 'هو هووو',
		character2: 'ها هاااي',
		character3: 'ياااو',
		character5: 'يا واااو',
		character6: 'هااااا',
		character7: 'هي هيهيي ',
	};

	const [selectedCharacter, setSelectedCharacter] = useState(character1);
	const [characterName, setCharacterName] = useState('');
	const [selectedCharacterSentence, setSelectedCharacterSentence] = useState('');
	const [showAlert, setShowAlert] = useState('');

	// Play audio function
	const playCharacterAudio = (character) => {
		const audioFile = characterAudioMap[character];
		const characterAudio = new Audio(audioFile);
		characterAudio.play();
	};

	const handleSelectedCharacter = (selected) => {
		// Play the character's sound
		playCharacterAudio(selected);

		// Set the selected character
		setSelectedCharacter(characterImages[selected]);

		// Set the selected Sentence
		setSelectedCharacterSentence(characterSentence[selected]);
	};

	const handlesStartGame = () => {
		if (characterName === '') {
			setShowAlert('من فضلك أبدع في اعطاء اسم للشخصية');
		} else {
			axios
				.post('https://658d2e7c7c48dce94738a443.mockapi.io/characters', {
					image: selectedCharacter,
					name: characterName,
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});

			navigate('/StagesGame');
		}
	};


	return (
		<div className=' bg-[#004B50] h-screen'>
			<p className='p-6 text-center text-3xl  text-white max-sm:text-base max-sm:p-3 font-primary'>
				اختر الشخصية التي تريد انقاذها
			</p>
			<div className='flex justify-center'></div>

			<section className='flex flex-row-reverse max-sm:flex-col gap-6'>
				{/* start div for selected character and character name*/}
				<div
					className='bg-contain  w-[45vw] h-[60vh] bg-no-repeat bg-center  bg-[#004B50] max-sm:h-[36vh] max-sm:w-[100vw]'
					style={{
						backgroundImage: `url(${goldBackground})`,
					}}
				>
					<div className='flex flex-col gap-32 h-[72vh] w-[45vw]  items-center max-sm:gap-12 max-sm:h-[48vh] max-sm:w-[100vw]'>
						{/*start selected character and his sentence */}
						<div className='flex relative justify-center  w-full'>
							<p className='absolute font-secondary text-white font-bold top-10 text-5xl left-96 max-sm:left-56 max-sm:text-2xl z-10 tilted-text'>
								{/* هاااا هااي */}
								{selectedCharacterSentence}
							</p>
							<img
								src={selectedCharacter}
								className=' w-[14vw] h-[45vh] mt-2 max-sm:h-[26vh] max-sm:w-[24vw] '
							/>
						</div>
						{/*end selected character and his sentence */}
						<div className='flex flex-col items-center gap-1'>
							<input
								value={characterName}
								onChange={(e) => {
									setCharacterName(e.target.value);
								}}
								type='text'
								placeholder='اعطي اسم للشخصية'
								className='text-center w-[20vw] placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA] max-sm:w-[45vw] font-secondary'
							/>
							<p className='text-[#d85555] font-semibold  p-1'>{showAlert}</p>
						</div>
					</div>
				</div>
				{/* end div for selected character and character name*/}

				{/* start All characters */}
				<div className='flex flex-col items-center w-[100vw] gap-10 mt-20 max-sm:flex-col  max-sm:justify-center max-sm:gap-4 max-sm:mt-10'>
					{/* start characters in first line */}
					<div className='flex gap-10 max-sm:gap-8 '>
						{/* char1 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter('character3');
							}}
						>
							<img src={character3} className='w-[10vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>

						{/* char2 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter('character1');
							}}
						>
							<img src={character1} className='w-[6vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char3 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter('character2');
							}}
						>
							<img src={character2} className='w-[10vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
					</div>
					{/* end characters in first line */}

					<div className='flex gap-10 max-sm:gap-8 '>
						{/* char4 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter('character5');
							}}
						>
							<img src={character5} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char5 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter('character6');
							}}
						>
							<img src={character6} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char6 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter('character7');
							}}
						>
							<img src={character7} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
					</div>
				</div>
				{/* end All characters */}
			</section>
			{/* <Link to={'/StagesGame'}> */}
			<div className='flex justify-center  h-[20vh] max-sm:h-[8vh] items-end max-sm:mt-3 '>
				<button
					onClick={handlesStartGame}
					className='w-[20vw] bg-[#8D3333] text-white p-2 rounded-lg  max-sm:w-[40vw] font-secondary'
				>
					ابدأ
				</button>
			</div>
			{/* </Link> */}
		</div>
	);
}

export default Characters;
