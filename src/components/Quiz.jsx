import React, { useState } from "react";
import "../App.css";

function Quiz() {
  let Array = [
    {
      question: "Q: Which city in Pakistan is known as the City of Gardens?",
      options: [
        { answer: "Lahore", result: true },
        { answer: "Karachi", result: false },
        { answer: "Islamabad", result: false },
        { answer: "Peshawar", result: false },
      ],
    },
    {
      question: "Q: Which city in Pakistan is known as the City of Lights?",
      options: [
        { answer: "Lahore", result: false },
        { answer: "Islamabad", result: false },
        { answer: "Karachi", result: true },
        { answer: "Peshawar", result: false },
      ],
    },
    {
      question: "Who was the founder of Pakistan ?",
      options: [
        { answer: "Liaquat Ali Khan", result: false },
        { answer: "Muhammad Ali Jinnah", result: true },
        { answer: "Benazir Bhutto", result: false },
      ],
    },
    {
      question:
        "Q: Which Pakistani woman became the youngest Microsoft Certified Professional (MCP) at the age of nine?",
      options: [
        { answer: "Dr.Afia Siddiqui", result: false },
        { answer: "Maryam Nawaz", result: false },
        { answer: "Arfa Karim", result: true },
      ],
    },
    {
      question:
        "Q: Which city in Pakistan is renowned for its Sufi shrines and peaceful atmosphere?",
      options: [
        { answer: "Lahore (the City of Gardens)", result: false },
        { answer: "Karachi (the City of Lights) Nawaz", result: false },
        { answer: "Multan, ( the City of Saints)", result: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const next = (result) => {
    if (result) {
      setScore(score + 1);
    }

    let next = currentQuestion + 1;
    if (next < Array.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
        <div className="Score-Container score-contasiner">
          <div className="Score">
            <h3>
              Score: {score}/{Array.length}
            </h3>
          </div>
        </div>
      ) : (
        <header className=" Quiz-Container">
          <h5>
            <b>
              Question{currentQuestion + 1}/{Array.length}
            </b>
          </h5>
          <h4 className="question w-75 text-center">
            {Array[currentQuestion].question}?
          </h4>
          <div className="options">
            {Array[currentQuestion].options.map((e) => (
              <button
                className="btn btn-dark mx-2"
                onClick={() => next(e.result)}
              >
                {e.answer}
              </button>
            ))}
          </div>
        </header>
      )}
    </>
  );
}

export default Quiz;
