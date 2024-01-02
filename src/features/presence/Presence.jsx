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
  gap: var(--gap-medium);
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
  font-size: var(--font-xsmall);
`;

const Img = styled.img``;

const Description = styled.span`
  font-size: var(--font-small);
`;

const BackgroundColored = styled.div`
  background-color: var(--color-white);
  color: var(--color-green);
  padding: 0 var(--padding-xxsmall);
  width: fit-content;
`;

function Presence() {
  return (
    <StyledPresence>
      <Information>
        <Intro>[ who we look for ]</Intro>
        <Title>
          <Special>&ldquo;</Special> Seeking to enhance your brand?
        </Title>
        <Img src="/extras/brand.jpg"></Img>
        <Description>
          <BackgroundColored>Fully maximize</BackgroundColored> the capabilities
          of your business with a strong digital presence!
          <br />
          <br />
          <Closing>
            Manage your website effectively with <Special>WorldHello</Special>.
          </Closing>
        </Description>
        <Button variation="secondary" size="small">
          Start your project today
        </Button>
      </Information>
    </StyledPresence>
  );
}

export default Presence;
