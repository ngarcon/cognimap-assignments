import React from 'react';

import './CardButton.scss'; 

const CardButton = (props) => {

    const {modalNumber, handleModalOpening} = props; 
    
    return (
        <button className="btn-modal" onClick={handleModalOpening}>
            Ouvrir la modale {modalNumber}
        </button>
    );
}

export default CardButton;
