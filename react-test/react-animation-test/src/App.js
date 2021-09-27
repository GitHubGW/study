import React, { useState } from "react";
import Modal from "react-modal";
// import Router from "Router";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log("1a");
  }

  function afterOpenModal() {
    console.log("2a");
  }

  function closeModal() {
    setIsOpen(false);
    console.log("3a");
  }
  return (
    <>
      <h1>App</h1>
      {/* <Router /> */}
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} contentLabel="Example Modal">
        <h1>Hello</h1>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
}

export default App;
