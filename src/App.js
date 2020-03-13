import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ENTER<br></br>TO WIN</h1>
        <h2>CALI OR BUST<br></br>SWEEPSTAKES</h2>
        <p className="small-font">7 day get away </p>
        <hr></hr>
        <form className="form-cont">
          <p className="medium-font">First name:</p><br></br>
          <input type="text" name="firstname"></input><br></br>
          <p className="medium-font">Last name:</p><br></br>
          <input type="text" name="lastname"></input><br></br>
          <p className="medium-font">Email:</p><br></br>
          <input type="email"></input>
          <button content="Sample Button" className="sub-button">SUBMIT</button>
        </form>
        {/* <button>SUBMIT</button> */}
        {/* <button content="Sample Button" className="sub-button">SUBMIT</button> */}
      </div>
    </div>
  )
}

export default App;
