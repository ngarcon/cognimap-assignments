import React from 'react';

import './style.css'; 

const ModalTitle = (props) => {

    const {modalNumber} = props; 

    return (
        <header className="modal-title">
            <h2>Titre</h2>
        </header>
    );
}

export default ModalTitle;
