import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

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
const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-green);
  padding: var(--padding-small);
  opacity: 0.75;
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
        <Intro>[ who we look for ]</Intro>
        <Title>
          <Special>&ldquo;</Special> Do you have an ambitious brand you would
          want to elevate with a digital footprint?
        </Title>
        <Description>
          Unlock the full potential for your business with a digital presence!
          <br />
          <br />
          <Special>Take control of your website with WorldHello.</Special>
        </Description>
        <Button variation="secondary" size="small">
          Start your project
        </Button>
      </Information>
    </StyledPresence>
  );
}

export default Presence;
