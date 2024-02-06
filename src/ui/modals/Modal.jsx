import styled from 'styled-components';
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
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 355px;
  text-align: center;
  z-index: var(--z-toppest);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

function Modal({ closeModal }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition !== 0) {
      closeModal();
    }
  }, [scrollPosition, closeModal]);

  return (
    <StyledModal>
      <ModalContent>{/* Your modal content */}</ModalContent>
    </StyledModal>
  );
}

export default Modal;
