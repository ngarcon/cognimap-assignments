import React from 'react';

// Components
import ModalTitle from './ModalTitle'; 
import ModalContent from './ModalContent'; 
import ModalButtons from './ModalButtons'; 

import './Modal.scss'; 

const Modal = () => {
    
    const handleModalClosure = (event) => {
        const modal = event.target.closest('.modal-background'); 
        modal.classList.toggle('active'); 
    }
    return (
        <div className="modal-background">
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
