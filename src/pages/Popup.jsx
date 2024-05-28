import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (isOpen) {
    return null;
  } else {
    return (
      <div className="modal-overlay modal">
        <div className="modal-content">
          <span className="btn btn-danger close-btn" onClick={onClose}>
            ×
          </span>
          {children}
        </div>
      </div>
    );
  }
};
export default Modal;
