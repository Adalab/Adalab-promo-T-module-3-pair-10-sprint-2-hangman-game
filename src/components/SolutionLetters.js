import React from 'react';

export const SolutionLetters = ({ word, userLetters }) => {
  const renderSolutionLetters = () => {
    return word.split('').map((letter) => {
      if (userLetters.includes(letter)) {
        return letter;
      } else {
        return '_';
      }
    });
  };

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">
        {renderSolutionLetters().map((letter, index) => (
          <li key={index} className="letter">
            {letter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionLetters;

