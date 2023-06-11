import React from 'react';

const Question = ({ question, options, selectedAnswer, onAnswer }) => {
  const handleChange = (e) => {
    onAnswer(e.target.value);
  };
  const optionsArray = options.options;
  // console.log(optionsArray[0].name);
  return (
    <div>
      <p>{question}</p>
      <ul>
        {optionsArray.map((optionsArray, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={index}
                checked={selectedAnswer === index}
                onChange={handleChange}
              />
              {optionsArray.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
