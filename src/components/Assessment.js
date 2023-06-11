import React, { useState } from 'react';
import questions from '../assessment.json';
import Question from './Question';
import Summary from './Summary';

const Assessment = () => {
  const [user, setUser] = useState({
    name: sessionStorage.getItem('name'),
    email: sessionStorage.getItem('email')

  });
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
    let score = 0;
  answers.forEach((userAnswer, index) => {
    const correctAnswer = questions.questions[index].correctAnswer;
    if (userAnswer === correctAnswer) {
      score++;
    }
  });
  };
  // console.log(questions);
  const currentQuestion = questions.questions[currentQuestionIndex];

  return (
    <div>
      <h2>Assessment</h2>
      {currentQuestion ? (
        <div>
          <h3>Question {currentQuestionIndex + 1} out of 25</h3>
          <Question
            question={currentQuestion.question}
            options={currentQuestion}
            selectedAnswer={answers[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
          <div>
            {currentQuestionIndex > 0 && (
              <button onClick={handlePrevQuestion}>Previous Question</button>
            )}
            <br />
            {currentQuestionIndex <= 24 && (
              <button onClick={handleNextQuestion}>Next Question</button>
            )}
            <br />
            {currentQuestionIndex === 24 && (
              <button onClick={handleFinishAssessment}>Finish Assessment</button>
            )}
          </div>
        </div>
      ) : (
        <Summary user={user} answers={answers} questions={questions} />
      )}
    </div>
  );
};

export default Assessment;
