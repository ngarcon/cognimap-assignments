import React from 'react';

import './ModalButtons.scss'; 

const ModalButtons = (props) => {

    const {handleModalClosure} = props; 

    return (

        <footer className="footer-modal">
            <button className="btn-modal btn-modal--cancel" onClick={handleModalClosure}>
                Cancel
            </button>
            <button className="btn-modal" onClick={handleModalClosure}>
                OK
            </button>
        </footer>
    );
}

export default ModalButtons;
