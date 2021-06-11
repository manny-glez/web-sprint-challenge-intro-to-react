import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Character from './components/Character'
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(' https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data)
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header />
      <div className="characters">
        {characters.map(charObj => {
          return <Character key={charObj.name} name={charObj.name}/>
        })}
      </div>
    </div>
  );
}

export default App;
