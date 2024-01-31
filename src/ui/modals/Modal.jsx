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
const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 75vh;
  width: 100%;
  // TODO: Code logic for width adjustments
  max-width: 355px;

  text-align: center;

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 40.5em) {
    height: 47vh;
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the information data
function Modal({ closeModal }) {
  return (
    <StyledModal>
      <ModalContent>
        <Form closeModal={closeModal} />
      </ModalContent>
    </StyledModal>
  );
}

// Export Reusable Modal
export default Modal;
