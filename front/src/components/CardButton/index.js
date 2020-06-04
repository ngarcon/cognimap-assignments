import React from 'react';

import './style.css'; 

const CardButton = (props) => {

    const {modalNumber, handleModalOpening} = props; 
    
    return (
        <button className="btn-modal" onClick={handleModalOpening}>
            Ouvrir la modale {modalNumber}
        </button>
    );
}

export default CardButton;
