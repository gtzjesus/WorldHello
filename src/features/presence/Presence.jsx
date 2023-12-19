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
  color: var(--color-blue);
  opacity: 0.75;
`;

const Special = styled.span`
  color: var(--color-blue);
`;

const Title = styled.span`
  font-size: var(--font-medium);
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
          <Special>&ldquo;</Special> Do you have an ambitious brand you want to
          elevate?
        </Title>
        <Img src="/extras/brand.jpg"></Img>
        <Description>
          Unlock the full potential for your business with a digital presence!
          <br />
          <br />
          <Special>Take control of your website with WorldHello.</Special>
        </Description>
        <Button variation="primary" size="small">
          Start your project
        </Button>
      </Information>
    </StyledPresence>
  );
}

export default Presence;
