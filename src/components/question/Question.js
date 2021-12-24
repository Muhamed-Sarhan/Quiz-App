import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import "../../css/question.css";
import audiotrue from "../../bravo.mp3";
import audiofalse from "../../gd3.mp3";

import { questions } from "../../data/Data";

const Question = () => {
  const history = useHistory();
  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [random, setRandom] = useState([]);
  const userName = useSelector((state) => state.reducer.name);

  const handleAgain = () => {
    history.push("/");
  };

  const playAudioTrue = () => {
    new Audio(audiotrue).play();
  };
  const playAudioFalse = () => {
    new Audio(audiofalse).play();
  };

  const handleNextQ = (isTrue) => {
    if (isTrue === true) {
      setScore(score + 1);
      playAudioTrue();
      swal("صح", "اجابة صحيحة", "success");
    } else if (isTrue === false) {
      playAudioFalse();
      swal("غلط", "اجابة خاطئة", "error");
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    const randomQuestion = questions.sort(() => Math.random() - 0.5);
    setRandom(randomQuestion);
    console.log(random, "-O__O-");
  }, []);

  return (
    <div className="question">
      {showScore ? (
        <div className="score">
          <div className="score-container">
            <h3>{userName}</h3>
            <p>
              You scored <span>{score}</span> of 20
            </p>
            <button className="again-btn" onClick={handleAgain}>
              Play Again ?
            </button>
          </div>
        </div>
      ) : (
        <div className="q-container">
          <div className="userName" dir="rtl">
            <p>مرحبا {userName}</p>
            <img
              src="https://i.ibb.co/gjQyFmj/testimonial-2.jpg"
              alt="avatar"
            />
          </div>
          <div className="question-section">
            <div className="question-count" dir="rtl">
              <span>السؤال {currentQ + 1}</span>/{questions.length}
            </div>
            <div className="question-text" dir="rtl">
              {questions[currentQ].question}
            </div>
          </div>
          <div className="answer-section" dir="rtl">
            {questions[currentQ].answers
              .sort(() => Math.random() - 0.5)
              .map((ans, i) => (
                <button
                  onClick={() => handleNextQ(ans.isTrue)}
                  key={i}
                  className="answer-btn"
                >
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
