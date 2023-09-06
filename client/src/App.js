import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function App() {


  const [output, setOutput] = useState("")
  const getitfrombackent = () => {
    const url = "http://localhost:8080/";
    axios.get(url).then((response) => {
      setOutput(response.data)
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to 2stepREP</h1>
        <button onClick={getitfrombackent}>Get it from backend</button>
        <h1>{output}</h1>
      </header>
    </div>
  );
}

export default App;
