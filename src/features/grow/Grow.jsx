import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledGrow = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-green);
  padding: var(--padding-medium);
  color: var(--color-white);

  @media (min-width: 40.25em) {
    padding: var(--padding-xlarge);
  }

  @media (min-width: 78.15em) {
    justify-content: space-between;
    flex-direction: row;
    padding: var(--padding-large);
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-medium);

  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Description = styled.span`
  font-size: var(--font-medium);

  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }
  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Img = styled.img`
  @media (min-width: 40.25em) {
    padding: var(--padding-large);
  }

  @media (min-width: 61.25em) {
    width: 60vw;
  }

  @media (min-width: 78.15em) {
    width: 35vw;
  }
  @media (min-width: 150.15em) {
    width: 30vw;
  }
`;

const Special = styled.span`
  background-color: var(--color-white);
  color: var(--color-green);
  padding: 0 var(--padding-xxsmall);
`;

function Grow() {
  return (
    <StyledGrow>
      <Information>
        <Title>
          Crafting websites with high conversion rates, <br />
          <MiniDescription>
            utilizing strategic designs, data & SEO.
          </MiniDescription>
        </Title>
      </Information>
      <Information>
        <Img src="/backgrounds/grow.png"></Img>
        <Description>Join us and grow!</Description>
        <MiniDescription>
          Expand your business with WorldHello, harnessing the full advantages
          of our combined resources and extensive experience.
        </MiniDescription>
        <Description>
          Let&rsquo;s strive for greater <Special>success together.</Special>
        </Description>
        <Button variation="secondary" size="small">
          click to begin your website
        </Button>
      </Information>
    </StyledGrow>
  );
}

export default Grow;
