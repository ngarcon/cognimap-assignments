import React from 'react';

import './ModalContent.scss'; 

const ModalContent = (props) => {

    const {modalNumber} = props; 

    return (
        <main className="modal-content">
            Content of the modal
        </main>
    );
}

export default ModalContent;
