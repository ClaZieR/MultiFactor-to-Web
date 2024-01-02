import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [output, setOutput] = useState("");
  const [apikey, setApikey] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handle(event) {
    setApikey(event.target.value);
  }

  const getitfrombackent = () => {
    setIsButtonDisabled(true);
    setOutput("Loading");

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
        setIsButtonDisabled(false);
      });
  };

  return (
  
    <div className="App">
      <section>
        <div className="form-box">
            <div className="form-value">
                <form action="">
                    <h1>BCPC Offline EA Launcher</h1>
                    <div className="inputbox">
                        <input type="text" required maxLength="40" onChange={handle}></input>
                        <label htmlFor="">Pleae Enter Your Unique Key</label>
                    </div>
                    <button onClick={getitfrombackent} disabled={isButtonDisabled}>Request The Code</button>
                    <h1>{output}</h1>
                    <div className="contact">
                        <p> Forgot Your Unique Key? <a href="mailto:serviceteam@buycheapplaycheap.com">Contact Us</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>

    </div>

  );
}

export default App;
