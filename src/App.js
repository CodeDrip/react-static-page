import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ENTER<br></br>TO WIN</h1>
        <h2>CALI OR BUST<br></br>SWEEPSTAKES</h2>
        <p>7 day get away </p>
        <form>
          First name:<br></br>
          <input type="text" name="firstname"></input><br></br>
          Last name:<br></br>
          <input type="text" name="lastname"></input><br></br>
          Email:<br></br>
          <input type="email"></input>
          
        </form>
        {/* <button>SUBMIT</button> */}
        <button content="Sample Button" className="sub-button">SUBMIT</button>
      </div>
    </div>
  )
}

export default App;
