import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const EventModal = ({ isOpen, onClose, event }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("body-blur");
    } else {
      document.body.classList.remove("body-blur");
    }
  }, [isModalOpen]);

  return (
    <Modal className="popup" isOpen={isModalOpen} onRequestClose={handleCloseModal}>
      {event && (
        <>
          <h2>We are boycotting because: {event.why}</h2>
        </>
      )}
      <button className="popup" onClick={handleCloseModal}></button>
    </Modal>
  );
};



