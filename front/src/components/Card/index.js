import React from 'react';

// Components
import CardButton from '../CardButton'; 
import CardLabel from '../CardLabel'; 
import CardFooter from '../CardFooter'; 

//Style 
import './Card.css';


function Card (props) {

  const {modalNumber} = props; 

  return (
    <div className="Card">
        <CardButton modalNumber={modalNumber}/>
        <CardLabel />
        <CardFooter />
    </div>
  );
}

export default Card;
