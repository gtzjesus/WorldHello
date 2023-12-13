import styled from 'styled-components';

const StyledPresence = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-large) var(--padding-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;

const Special = styled.span`
  color: var(--color-green);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

function Presence() {
  return (
    <StyledPresence>
      <Information>
        <Title>
          <Special>&ldquo;</Special> Do you have an ambitious brand you would
          want to elevate with a digital footprint?
        </Title>
        <Description>
          Unlock the full potential for your business with a digital presence
          <br />
          <br />
          <Special>Take control of your website with WorldHello.</Special>
        </Description>
      </Information>
    </StyledPresence>
  );
}

export default Presence;
