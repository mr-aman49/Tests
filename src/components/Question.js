import React from 'react';

const Question = ({ question, options, selectedAnswer, onAnswer }) => {
  const handleChange = (e) => {
    onAnswer(e.target.value);
  };

  return (
    <div>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={index}
                checked={selectedAnswer === index}
                onChange={handleChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
