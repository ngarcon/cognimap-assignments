import React from 'react';

import './style.css'; 

const CardButton = (props) => {

    const {modalNumber} = props; 

    return (
        <button className="btn-modal">
            Ouvrir la modale {modalNumber}
        </button>
    );
}

export default CardButton;
