import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/prsions.png';

function NavBar(props) {
	const [time, setTime] = useState(1 * 60); // Time in seconds
	const [cityimage, setCityImage] = useState('');
	const [charname, setCharName] = useState('');

	const totalScore = localStorage.getItem('score');
	const charName = localStorage.getItem('name');
	const charImage = localStorage.getItem('image');
	const id = localStorage.getItem('id');
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`https://658d2e7c7c48dce94738a443.mockapi.io/gamedate/${id}`)
			.then((res) => {
				console.log(res.data);
				setCityImage(res.data.cityimage);
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(`https://658d2e7c7c48dce94738a443.mockapi.io/characters/${id}`)
			.then((res) => {
				console.log(res.data);
				setCharName(res.data.name);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	// time
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => {
				const newTime = prevTime > 0 ? prevTime - 1 : 0;

				// Check if time has reached 0:00
				if (newTime === 0 && props.totalChallenges === '1') {
					clearInterval(interval); // Stop the interval
					alert('Time is up! You are a loser.'); // Show the alert
					navigate('/StagesGame');
				}

				return newTime;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// Check if totalScore is equal to totalChallenges
		if (parseInt(totalScore, 10) === props.totalChallenges && props.totalChallenges === '1') {
			localStorage.removeItem('score');
			navigate('/Levle2');
		} else if (parseInt(totalScore, 10) === props.totalChallenges && props.totalChallenges === '2') {
			localStorage.removeItem('score');
			navigate('/Levle3');
		} else {
		}
	}, [totalScore, props.totalChallenges, navigate]);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	return (
		<>
			<nav className='w-[98vw]'>
				{/* save the character */}
				<div className='flex justify-center items-center h-10 text-white'>
					<p className='font-bold text-xl font-primary'>الآن عليك الإنقاذ والبحث عن {charName}</p>
				</div>
				<div className='flex  justify-between items-center '>
					<div>
						<img src={`${cityimage}`} alt='city-img' width={150} className='' />
					</div>
					<div className='flex flex-col justify-center items-center'>
						<div className='text-center flex flex-col items-center'>
							<p className='text-white font-secondary'>نسخ الشخصيات المكتسبة</p>
							<img src={`${charImage}`} alt='charcter choose nav' width={90} />

							<p className='text-center font-secondary text-white'>
								{totalScore}/ {props.totalChallenges}
							</p>
						</div>
						<div>
							{/* <p>الوقت المتبقي</p> */}
							<div className='text-center font-secondary text-white'>
								{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
							</div>
							{/* <div>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </div> */}
						</div>
					</div>
					{/* logo */}
					<div className=''>
						<Link to={'/'}>
							{' '}
							<img src={`${Logo}`} alt='logo' width={100} />
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
