import React from 'react';
import './styles/AlertModal.css';

const AlertModal = ({ message, onAccept }) => {
  return (
    <div>
      <div className="alert-header" style={{ backgroundColor: '#ffc560' }}>
        <p className="alert-title">¡Has iniciado sesión con éxito!</p>
      </div>
      <div className="alert-modal-overlay">
        <div className="alert-modal">
          <div className="alert-content">
            <p>{message}</p>
            <button className="btn btn-success" onClick={onAccept}>Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
