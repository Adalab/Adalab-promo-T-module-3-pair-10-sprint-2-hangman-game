import React from 'react';

export const ErrorLetters = ({ word, userLetters }) => {
  const calculateErrors = () => {
    const failedLetters = userLetters.filter((letter) => !word.includes(letter));
    return failedLetters.length;
  };

  return (
    <div className="error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="letters">
        {userLetters.map((letter, index) => (
          <li key={index} className="letter">
            {letter}
          </li>
        ))}
      </ul>
      <p>Número de errores: {calculateErrors()}</p>
    </div>
  );
};

export default ErrorLetters;
