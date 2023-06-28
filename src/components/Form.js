import React from 'react';

const Form = ({ lastLetter, handleInputChange, handleClick, word }) => {
  return (
    <form className="form">
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={lastLetter}
        onChange={handleInputChange}
      />
      <input type="submit" value="Incrementar" onClick={handleClick} />
      <div>
        <h2>Palabra aleatoria: {word} </h2>
      </div>
    </form>
  );
};

export default Form;
