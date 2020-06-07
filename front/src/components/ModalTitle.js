import React from 'react';

import './ModalTitle.scss'; 

const ModalTitle = (props) => {

    const {handleModalClosure} = props; 

    return (
        <header className="modal-header">
            <h2>Titre</h2>
            <icon className="modal-close" alt="Modal close button" onClick={handleModalClosure}>&times;</icon>
        </header>
    );
}

export default ModalTitle;
