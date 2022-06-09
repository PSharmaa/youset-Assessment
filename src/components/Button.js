import React, { useState, useEffect } from "react";

import "./button.css";
import Formdata from "./Formdata";

function Button(props) {

  const Modal = ({ onRequestClose }) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {
      function onKeyDown(event) {
        if (event.keyCode === 27) {
          // Close the modal when the Escape key is pressed
          onRequestClose();
        }
      }

      // Prevent scolling
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);

      // Clear things up when unmounting this component
      return () => {
        document.body.style.overflow = "visible";
        document.removeEventListener("keydown", onKeyDown);
      };
    });
   
    return (
      <div className="modal__backdrop">
        <div className="modal__container">
          
         
<Formdata/>
          <button type="button" onClick={onRequestClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
  const [isModelOpen, setModalIsOpen] = useState(false);
  const toggleModel = () => {
    setModalIsOpen(!isModelOpen);
  };

  return (
    <>
      {isModelOpen && <Modal onRequestClose={toggleModel} />}
      <div className="text-center">
      <button onClick={toggleModel} type="button"  >
        Buy It
      </button>
      </div>
    </>
  );
  }

export default Button;
