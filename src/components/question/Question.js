import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import '../../css/question.css';

import { questions } from '../../data/Data';

const Question = () => {
	const [currentQ, setCurrentQ] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const userName = useSelector((state) => state.reducer.name);

	const handleNextQ = (isTrue) => {
		if (isTrue === true) {
			setScore(score + 1);
		}
		const nextQ = currentQ + 1;
		if (nextQ < questions.length) {
			setCurrentQ(nextQ);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='question'>
			{showScore ? (
				<div className='score'>
					<h3>{userName}</h3>
					You scored <span>{score}</span> of 5
				</div>
			) : (
				<div className='q-container'>
					<div className='userName'>
						<p>Hi {userName}</p>
						<img src='https://i.ibb.co/gjQyFmj/testimonial-2.jpg' />
					</div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQ + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQ].question}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQ].answers.map((ans, i) => (
							<button
								onClick={() => handleNextQ(ans.isTrue)}
								key={i}
								className='answer-btn'>
								{ans.choice}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Question;
