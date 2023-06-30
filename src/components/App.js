// Fichero src/components/App.js
import '../styles/App.scss';
import '../styles/_reset.scss';
import '../styles/_loading.scss';
import '../styles/_letters.scss';
import '../styles/_instructions.scss';
import '../styles/_header.scss';
import '../styles/_form.scss';
import '../styles/_footer.scss';
import '../styles/_dummy.scss';
import '../styles/_app.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';


function App() {
  let [numberOfErrors, setErrors] = useState(0);
  const handleClick = (ev) => {
    ev.preventDefault();
    setErrors (numberOfErrors + 1);
    console.log (numberOfErrors);
  }

  const [userLetters, setUserLetters] = useState([]);
  let [lastLetter, setLastLetter] = useState('');
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const lastCharacter = inputText.charAt(inputText.length - 1);
    setLastLetter(lastCharacter);
    setUserLetters([...userLetters, lastCharacter]);
  };


//Obtener palabra aleatoria de una API
let [word, setWord] = useState('');
let [wordArray, setWordArray] = useState([]);
const url = 'https://dev.adalab.es/api/random/word';

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.word) {
          setWord(data.word);
          setWordArray(data.word.split('')); // Convierte la palabra en un array
        } else {
          throw new Error('Error al obtener la palabra');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchData();
  }, []);

  // Calcular el número de letras falladas
  const calculateErrors = () => {
    const failedLetters = userLetters.filter((letter) => !wordArray.includes(letter));
    return failedLetters.length;
  };

  useEffect(() => {
    setErrors(calculateErrors());
  }, [userLetters]);


return (
    <div className="page">
      <Header text='Juego del ahorcado' />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <Form
            lastLetter={lastLetter}
            handleInputChange={handleInputChange}
            handleClick={handleClick}
            word={word}
          />
        </section>
        <Dummy numberOfErrors={numberOfErrors} />
      </main>
    </div>
  );
}

export default App;
