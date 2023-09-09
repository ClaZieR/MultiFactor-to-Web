import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function App() {

  
  const [output, setOutput] = useState("")
  const getitfrombackent = () => {

    const option = {

      method: 'GET',
      url: 'http://localhost:8080/',
      params: { apikey: '1b6b8a9a3e28b905b19f49f9b693b7fd1c8ec9288' },
    }

    axios.request(option).then(function (response) {
      console.log(response.data);
      setOutput(response.data)
    }).catch(function (error) {
      console.error(error);
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
