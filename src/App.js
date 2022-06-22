import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
// import fetch from 'node-fetch';
import axios from 'axios';

function App() {

  useEffect(() => {
    async function tester(){
      const data = await axios.get('/hello');
      console.log(data);
    }
    tester();
    console.log('hello')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>tester</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
