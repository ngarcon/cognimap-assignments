import React from 'react';

// Components
import CardButton from '../CardButton'; 
import CardLabel from '../CardLabel'; 
import CardFooter from '../CardFooter'; 

//Style 
import './Card.css';


function Card (props) {

  const {modalNumber} = props; 

  const handleModalOpening = (event) => {
    const modal = document.querySelector('.modal-background'); 
    modal.classList.toggle('active'); 
}

  return (
    <div className="Card">
        <CardButton modalNumber={modalNumber} handleModalOpening={handleModalOpening}/>
        <CardLabel />
        <CardFooter />
    </div>
  );
}

export default Card;
