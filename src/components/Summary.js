import React from 'react';
import { Pie } from 'react-chartjs-2';

const Summary = ({ answers, questions }) => {
  // Calculate the score based on the correct answers
  const score = answers.reduce(
    (totalScore, answer, index) =>
      answer === questions[index].correctAnswer ? totalScore + 1 : totalScore,
    0
  );
  const name = sessionStorage.getItem('name');
  const email = sessionStorage.getItem('email');

  // Prepare chart data
  const chartData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [score, questions.length - score],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  return (
    <div>
      <h2>Assessment Summary</h2>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <h4>Selected Answers:</h4>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            Question {index + 1}: {questions[index].options[answer]}
            {answer === questions[index].correctAnswer ? ' (Correct)' : ' (Incorrect)'}
          </li>
        ))}
      </ul>
      <h4>Score: {score}/{questions.length}</h4>
      <div style={{ width: '300px', height: '300px' }}>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default Summary;
