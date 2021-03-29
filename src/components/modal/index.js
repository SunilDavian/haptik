import React from "react";

const Modal = ({ children, onSuccess, isOpen, onClose }) => {


    if (!isOpen) {
        return null;
    }

    return (
        <div className='modal' id="modal">
            <div className='content'>{children}</div>
            <div className='actions'>
                <button style={{ marginLeft: '2rem' }} onClick={onClose}>
                    close
                </button>
                <button onClick={onSuccess}>
                    Yes
                </button>
            </div>
        </div>
    );
}

export default Modal;
