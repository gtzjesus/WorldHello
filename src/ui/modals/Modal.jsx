// ------------------------------
// File: Modal.js
// ------------------------------
// Description: A Modal React Component used to display a window covering the full screen of the UI with a click of a button.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import Form from '../form/Form';
import { useEffect, useState } from 'react';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-toppest);
  overflow: hidden;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 355px;
  text-align: center;
  z-index: var(--z-toppest);
  overflow-y: auto; /* Enable scrolling inside the modal content */
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */
`;

function Modal({ closeModal }) {
  const [isScrollable, setIsScrollable] = useState(false);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    // Disable scrolling on the body when modal is open
    document.body.style.overflow = isScrollable ? 'auto' : 'hidden';

    return () => {
      // Cleanup when the modal is unmounted
      document.body.style.overflow = 'auto';
    };
  }, [isScrollable]);

  return (
    <StyledModal onClick={handleOutsideClick}>
      <ModalContent
        onMouseEnter={() => setIsScrollable(true)}
        onMouseLeave={() => setIsScrollable(false)}
      >
        <Form closeModal={closeModal} />
      </ModalContent>
    </StyledModal>
  );
}

export default Modal;
