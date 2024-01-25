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
`;

const ModalNav = styled.div`
  // Logic for arranging children
  display: flex;
  // Code logic for aligning vertically
  align-items: center;
  // Code logic for aligning horizontally
  justify-content: space-between;

  // UI
  // Code logic for title element
  font-size: var(--font-small);
  letter-spacing: var(--spacing-subtitle);
  // Code logic shadow beneath text (more visibility)
  /* text-shadow: var(--text-shadow-font); */
  text-transform: uppercase;

  // Code logic for margin from form in modal
  margin-bottom: var(--margin-form);
  padding: var(--padding-modal-nav);
`;

const ModalTitle = styled.span`
  font-size: var(--font-xxxsmall);
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  // TODO: Code logic for width adjustments
  max-width: 375px;

  text-align: center;
`;

const Close = styled.img`
  cursor: pointer;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the information data
function Modal({ closeModal }) {
  return (
    <StyledModal>
      <ModalContent>
        <ModalNav>
          <ModalTitle>Send a message</ModalTitle>
          <Close onClick={closeModal} src="/icons/close.png" />
        </ModalNav>
        <Form />
      </ModalContent>
    </StyledModal>
  );
}

// Export Reusable Modal
export default Modal;
