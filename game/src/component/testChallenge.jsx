import React, { useState } from 'react';

const TestChallenge = ({ challenge, onComplete }) => {
	const [userAnswer, setUserAnswer] = useState('');

	const handleAnswerChange = (event) => {
		setUserAnswer(event.target.value);
	};

	const handleChallengeSubmit = (event) => {
		//event.preventDefault();
		const isCorrectAnswer =
			userAnswer === challenge.options[challenge.correctOptionIndex] ||
			userAnswer === String(challenge.correctOptionIndex + 1);
		if (isCorrectAnswer) {
			onComplete();
		} else {
			alert('Incorrect answer. Please try again.');
		}
	};

	return (
		<div>
			<h2>{challenge.question}</h2>
			<form onSubmit={handleChallengeSubmit}>
				{challenge.options.map((option, index) => (
					<div key={index}>
						<label>
							<input
								type={challenge.options.length > 4 ? 'text' : 'radio'}
								name='answer'
								value={option}
								checked={userAnswer === option}
								onChange={handleAnswerChange}
							/>
							{option}
						</label>
					</div>
				))}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default TestChallenge;
