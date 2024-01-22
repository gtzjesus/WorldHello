// ------------------------------
// File: Modal.js
// ------------------------------
// Description: A Modal React Component used to display a window covering the full screen of the UI with a click of a button.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';

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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  // Logic for arranging children
  display: flex;
  // Code logic for aligning vertically
  align-items: center;
  // Code logic for aligning horizontally
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  // TODO: Code logic for width adjustments
  max-width: 600px;
  text-align: center;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the information data
function Modal({ closeModal }) {
  return (
    <StyledModal>
      <ModalContent>
        modal content here <img src="/icons/close.png" />
      </ModalContent>
    </StyledModal>
  );
}

// Export Reusable Modal
export default Modal;
