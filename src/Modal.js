import React from "react";
import { createPortal } from "react-dom";

function Modal({ isOpen, Content, setisOpen }) {
  if (!isOpen) return null;
  return createPortal(
    <div
      id="mdal"
      className="fixed grid left-0 bottom-0 right-0 top-0 bg-transparente"
    >
      <div className="w-8/12 m-auto bg-gray-500 rounded-md border border-blue-500 h-80">
        <Content isOpen={isOpen} setisOpen={setisOpen} />
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
