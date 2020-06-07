import React from 'react';

// Components
import ModalTitle from './ModalTitle'; 
import ModalContent from './ModalContent'; 
import ModalButtons from './ModalButtons'; 

import './Modal.scss'; 

const Modal = (props) => {

    const {handleModalClosure, active} = props; 

    let modalClassName = "modal-background"; 
    modalClassName += (active) ? " active" : ""; 
    
    return (
        <div className={modalClassName}>
            <div className="modal-container">
                <ModalTitle handleModalClosure={handleModalClosure}/>
                <hr/>
                <ModalContent />
                <hr/>
                <ModalButtons handleModalClosure={handleModalClosure}/>
            </div>
        </div>
    );
}

export default Modal;
