import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isVisible, title, content, onCancel, onConfirm }) => {
    return (
        <div className={`modal-background ${isVisible ? 'visible' : ''}`} id="modalBackground">
            <section className={`dialog ${isVisible ? 'visible' : ''}`} id="modal">
                <h3>{title}</h3>
                <p>{content}</p>
                <section className="buttons">
                    <button className="cancel-button" onClick={onCancel}>취소</button>
                    <button className="ok-button" onClick={onConfirm}>확인</button>
                </section>
            </section>
        </div>
    );
};

export default Modal;
