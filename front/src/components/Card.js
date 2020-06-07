import React from 'react';

// Components
import CardButton from './CardButton'; 
import CardLabel from './CardLabel'; 
import CardFooter from './CardFooter'; 

//Style 
import './Card.scss';


function Card (props) {

  const {modalNumber, handleModalOpening} = props; 

  return (
    <div className="Card">
        <CardButton modalNumber={modalNumber} handleModalOpening={handleModalOpening}/>
        <CardLabel />
        <CardFooter />
    </div>
  );
}

export default Card;
