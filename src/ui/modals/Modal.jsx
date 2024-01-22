import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px; /* Adjust the maximum width as needed */
  text-align: center;
`;

function Modal({ closeModal }) {
  return (
    <StyledModal>
      <ModalContent>modal content here</ModalContent>
    </StyledModal>
  );
}

export default Modal;
