import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Count from './components/Count';

function App() {
  return (
    <>
      <h1>Welcome to My App</h1>
      {/* <Hello /> */}

      <Count />
      <Count />
    </>
  );
}

export default App;
