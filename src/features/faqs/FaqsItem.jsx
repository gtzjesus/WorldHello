import styled from 'styled-components';

const StyledItem = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  cursor: pointer;

  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
`;

const Number = styled.p`
  font-weight: 500;
  color: #ced4da;
`;

const Title = styled.p`
  font-weight: 500;
`;

const Icon = styled.p`
  font-weight: 500;
`;

const Content = styled.p`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;
`;

function FaqsItem({ num, title, currentOpen, onOpen, children }) {
  const isOpen = num === currentOpen;

  // HELPER FUNCTION TO HANDLE toggle
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <>
      <StyledItem className={`${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <Number className="number">{num < 9 ? `0${num + 1}` : num + 1}</Number>
        <Title>{title}</Title>
        <Icon>{isOpen ? '-' : '+'}</Icon>
        {isOpen && <Content>{children}</Content>}
      </StyledItem>

      <hr />
    </>
  );
}

export default FaqsItem;
