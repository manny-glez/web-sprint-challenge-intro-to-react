import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import Character from "./components/Character.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(response => {
      console.log("HERE IS THE DATA:", response.data)  // array of character objects

      setCharacters(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">

      <h1 className="Header">Characters</h1>

      {console.log("HERE IS STATE:", characters)}

      {characters.map((charObj) => {
        return <Character name={charObj.name} key={charObj.name} />
      })}
      
    </div>
  );
}

export default App;
