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

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledModal = styled.div`
  // Code logic for positioning entrie modal full screen (of the device)
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // Code logic for the background overlay
  background-color: rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-top);
`;
const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  // TODO: Code logic for width adjustments
  max-width: 355px;

  text-align: center;
  z-index: var(--z-top);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the information data
function Modal({ closeModal }) {
  // State variable to control scrollable state
  const [isScrollable, setIsScrollable] = useState(true);
  // ------------------------------
  // Handler functions
  // ------------------------------
  // This section includes functions used to perform different tasks

  // Handler function to close modal with detection of outside click
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  // Update body style on mount and dismount
  useEffect(() => {
    document.body.style.overflow = isScrollable ? 'auto' : 'hidden';

    // Cleanup when the modal is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isScrollable]);

  return (
    <StyledModal
      onClick={handleOutsideClick}
      style={{ overflowY: isScrollable ? 'scroll' : 'hidden' }}
    >
      <ModalContent>
        <Form closeModal={closeModal} />
      </ModalContent>
    </StyledModal>
  );
}

// Export Reusable Modal
export default Modal;
