// components/CustomModal.js
import React from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* <div className="modal-overlay" onClick={onClose}></div> */}
      <div className="modal-overlay " onClick={onClose}>
        <button className="close-btn" onClick={onClose}>x</button>
        
        {children}
  
      </div>
    </>
  );
};

export default CustomModal;
