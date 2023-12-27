import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import character1 from '../assets/character-1.png';
import character2 from '../assets/character-2.png';
import character3 from '../assets/character-3.png';
import character5 from '../assets/character-5.png';
import character6 from '../assets/character-6.png';
import character7 from '../assets/character-7.png';
import goldBackground from '../assets/gold-background.png';
function Characters() {
	const [selectedCharacter, setSelectedCharacter] = useState(character1);

	const handleSelectedCharacter = (selected) => {
		setSelectedCharacter(selected);
	};

	return (
		<div className=' bg-[#004B50] h-screen'>
			<p className='p-6 text-center text-3xl  text-white max-sm:text-lg max-sm:p-5  font-primary'>
				اختر الشخصية التي تريد انقاذها
			</p>
			<div className='flex justify-center'></div>

			<section className='flex flex-row-reverse max-sm:flex-col gap-6'>
				{/* start div for selected character and character name*/}
				<div
					className='bg-contain w-[45vw] h-[60vh] bg-no-repeat bg-center  bg-[#004B50] max-sm:h-[36vh] max-sm:w-[100vw]'
					style={{
						backgroundImage: `url(${goldBackground})`,
					}}
				>
					<div className='flex flex-col gap-32 justify-end h-[72vh] w-[45vw]  items-center max-sm:justify-between max-sm:h-[39vh] max-sm:gap-0 max-sm:w-[100vw]'>
						<img
							src={selectedCharacter}
							className=' w-[14vw] h-[45vh] mt-2 max-sm:h-[26vh] max-sm:w-[24vw] vert-move'
						/>
						<input
							type='text'
							placeholder='اعطي اسم للشخصية'
							className='text-center w-[20vw] placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA] max-sm:w-[45vw] font-secondary'
						/>
					</div>
				</div>
				{/* end div for selected character and character name*/}

				{/* start All characters */}
				<div className='flex flex-col items-center w-[100vw] gap-10 mt-20 max-sm:flex-col  max-sm:justify-center max-sm:gap-4 max-sm:mt-4'>
					{/* start characters in first line */}
					<div className='flex gap-10 max-sm:gap-8 '>
						{/* char1 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter(character3);
							}}
						>
							<img src={character3} className='w-[10vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>

						{/* char2 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter(character1);
							}}
						>
							<img src={character1} className='w-[6vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char3 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter(character2);
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
								handleSelectedCharacter(character5);
							}}
						>
							<img src={character5} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char5 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter(character6);
							}}
						>
							<img src={character6} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
						{/* char6 */}
						<div
							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
							onClick={() => {
								handleSelectedCharacter(character7);
							}}
						>
							<img src={character7} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
						</div>
					</div>
				</div>
				{/* end All characters */}
			</section>
			<Link to={'/StagesGame'}>
				<div className='flex justify-center  h-[20vh] max-sm:h-[8vh] items-end '>
					<button className='w-[20vw] bg-[#8D3333] text-white p-2 rounded-lg max-sm:mt-3 max-sm:w-[40vw] font-secondary'>
						ابدأ
					</button>
				</div>
			</Link>
		</div>
	);
}

export default Characters;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import character1 from '../assets/character-1.png';
// import character2 from '../assets/character-2.png';
// import character3 from '../assets/character-3.png';
// import character5 from '../assets/character-5.png';
// import character6 from '../assets/character-6.png';
// import character7 from '../assets/character-7.png';
// import charactersBackground from '../assets/characters-background.jpeg';

// function Characters() {
// 	const [selectedCharacter, setSelectedCharacter] = useState(character1);

// 	const handleCharacterClick = (characterImage) => {
// 		setSelectedCharacter(characterImage);
// 	};

// 	return (
// 		<div className=' bg-[#004B50] h-screen'>
// 			<p className='p-5 text-center text-3xl  text-white max-sm:text-2xl max-sm:p-8  font-primary'>
// 				اختر الشخصية التي تريد انقاذها
// 			</p>
// 			<div className='flex justify-center'></div>

// 			<section className='flex flex-row-reverse max-sm:flex-col'>
// 				<div
// 					className='bg-contain w-[45vw] h-[60vh] bg-no-repeat bg-center  bg-[#004B50] max-sm:h-[35vh] max-sm:w-[100vw]'
// 					style={{
// 						backgroundImage: `url(${charactersBackground})`,
// 					}}
// 				>
// 					<div className='flex flex-col gap-32 justify-end h-[72vh] w-[45vw] items-center max-sm:h-[26vh] max-sm:w-[100vw]'>
// 						<img
// 							src={selectedCharacter}
// 							className=' w-[14vw] h-[45vh] mt-2 max-sm:h-[35vh] max-sm:w-[20vw] vert-move'
// 						/>
// 						<input
// 							type='text'
// 							placeholder='اعطي اسم للشخصية'
// 							className='text-center w-[20vw] placeholder:p-1 p-1 rounded-lg bg-[#ECEAEA] max-sm:w-[45vw] font-secondary'
// 						/>
// 					</div>
// 				</div>

// 				<div className='flex flex-col items-center w-[100vw] gap-10 mt-20 max-sm:flex-col  max-sm:justify-center max-sm:gap-4 max-sm:mt-4'>
// 					<div className='flex gap-10 max-sm:gap-8 '>
// 						<div
// 							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
// 							onClick={() => handleCharacterClick(character3)}
// 						>
// 							<img src={character3} className='w-[10vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
// 						</div>

// 						<div
// 							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
// 							onClick={() => handleCharacterClick(character1)}
// 						>
// 							<img src={character1} className='w-[6vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
// 						</div>

// 						<div
// 							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
// 							onClick={() => handleCharacterClick(character2)}
// 						>
// 							<img src={character2} className='w-[10vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
// 						</div>
// 					</div>

// 					<div className='flex gap-10 max-sm:gap-8 '>
// 						<div
// 							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
// 							onClick={() => handleCharacterClick(character5)}
// 						>
// 							<img src={character5} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
// 						</div>

// 						<div
// 							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
// 							onClick={() => handleCharacterClick(character6)}
// 						>
// 							<img src={character6} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
// 						</div>

// 						<div
// 							className='flex justify-center bg-[rgba(189,183,182,0.6)] rounded-ss-3xl  rounded-ee-3xl w-[11vw] shadow-2xl max-sm:w-[18vw] max-sm:items-center character'
// 							onClick={() => handleCharacterClick(character7)}
// 						>
// 							<img src={character7} className='w-[8vw] h-[20vh] max-sm:h-[16vh] max-sm:w-[18vw]' />
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<Link to={'/StagesGame'}>
// 				<div className='flex justify-center  h-[20vh] items-end '>
// 					<button className='w-[20vw] bg-[#8D3333] text-white p-2 rounded-lg max-sm:mt-3 max-sm:w-[40vw] font-secondary'>
// 						ابدأ
// 					</button>
// 				</div>
// 			</Link>
// 		</div>
// 	);
// }

// export default Characters;
