import React, { useState } from 'react';
import questions from '../assessment.json';
import Question from './Question';
import Summary from './Summary';

const Assessment = ({ user }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleFinishAssessment = () => {
    // Calculate the user's score and perform any necessary actions
    // Display summary page or perform other actions
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Assessment</h2>
      {currentQuestion ? (
        <>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={answers[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
          <div>
            {currentQuestionIndex > 0 && (
              <button onClick={handlePrevQuestion}>Previous Question</button>
            )}
            {currentQuestionIndex < questions.length - 1 && (
              <button onClick={handleNextQuestion}>Next Question</button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button onClick={handleFinishAssessment}>Finish Assessment</button>
            )}
          </div>
        </>
      ) : (
        <Summary user={user} answers={answers} questions={questions} />
      )}
    </div>
  );
};

export default Assessment;
