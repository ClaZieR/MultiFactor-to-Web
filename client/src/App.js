import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [output, setOutput] = useState("");
  const [apikey, setApikey] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Initially, the button is not disabled

  function handle(event) {
    setApikey(event.target.value);
  }

  const getitfrombackent = () => {
    setIsButtonDisabled(true);
    setOutput("Loading") // Disable the button when the request starts

    const options = {
      method: 'GET',
      url: 'http://localhost:8080/',
      params: { apikey: apikey },
    };

    axios.request(options)
      .then(function (response) {
        setOutput(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        setIsButtonDisabled(false); // Enable the button when the request is complete (success or error)
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to 2stepREP</h1>
        <input type="text" placeholder="Enter API Key" onChange={handle}></input>
        <button onClick={getitfrombackent} disabled={isButtonDisabled}>
          Get it from backend
        </button>
        <h1>{output}</h1>
      </header>
    </div>
  );
}

export default App;
