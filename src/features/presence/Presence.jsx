import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledPresence = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;
const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-green);
`;

const Special = styled.span`
  color: var(--color-green);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Closing = styled.span`
  color: var(--color-green);
  font-size: var(--font-xsmall);
`;

const Img = styled.img``;

const Description = styled.span`
  font-size: var(--font-small);
`;

function Presence() {
  return (
    <StyledPresence>
      <Information>
        <Intro>[ who we look for ]</Intro>
        <Title>
          <Special>&ldquo;</Special> Looking to elevate your brand?
        </Title>
        <Img src="/extras/brand.jpg"></Img>
        <Description>
          Unlock the full potential of your business with a digital footprint!
          <br />
          <br />
          <Closing>Take control of your website with WorldHello.</Closing>
        </Description>
        <Button variation="secondary" size="small">
          Start your project today
        </Button>
      </Information>
    </StyledPresence>
  );
}

export default Presence;
