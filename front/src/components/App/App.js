import React from 'react';

import Card from '../Card'; 
import Modal from '../Modal'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Card modalNumber="1"/>
      <Card modalNumber="2"/>
      <Modal/>
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <Card modalNumber="1"/>
      <Card modalNumber="2"/>
    </div>
  );
} */

export default App;
