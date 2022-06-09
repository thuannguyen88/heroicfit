import React from "react";

function Modal({ showModal, setShowModal }) {
  return <>{showModal ? <div>I am a modal</div> : null}</>;
}

export default Modal;
