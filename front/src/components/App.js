import React, {useState} from 'react';

import Card from './Card'; 
import Modal from './Modal'; 

import './App.scss';

function App() {

  const [modalActive, setModalState] = useState(false); 

  const handleModalClosure = (event) => {
    setModalState(false); 
  }

  const handleModalOpening = (event) => {
    setModalState(true); 
  }


  return (
    <div className="App">
      <Card modalNumber="1" handleModalOpening={handleModalOpening}/>
      <Card modalNumber="2" handleModalOpening={handleModalOpening}/>
      <Modal active={modalActive} handleModalClosure={handleModalClosure}/>
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
