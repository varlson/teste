import { useEffect, useRef } from "react";
import Modal from "./Modal";
import { useState } from "react";
import Content from "./Content";
import Content1 from "./Content1";
function App() {
  const [isOpen, setisOpen] = useState(false);
  const clickHandle = () => {
    setisOpen(true);
  };
  return (
    <div className="">
      <p className="text-4xl text-center">Ola Mundo</p>
      <div className="my-4 grid">
        <button
          onClick={clickHandle}
          className="bg-green-400 px-4 py-2 rounded-md justify-self-center"
        >
          Abrir
        </button>
        <Modal isOpen={isOpen} setisOpen={setisOpen} Content={Content1} />
      </div>
      <p>lorem*20</p>
    </div>
  );
}

export default App;
