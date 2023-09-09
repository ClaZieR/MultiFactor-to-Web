import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function App() {

  
  const [output, setOutput] = useState("")
  const [apikey, setApikey] = useState("")
  
  function handle(event){
    setApikey(event.target.value)
  }

  const getitfrombackent = () => {

    const option = {

      method: 'GET',
      url: 'http://localhost:8080/',
      params: { apikey: apikey },
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
        <input type="text" placeholder="Enter API Key" onChange={handle}></input>
        <button onClick={getitfrombackent}>Get it from backend</button>
        <h1>{output}</h1>
      </header>
    </div>
  );
}

export default App;
