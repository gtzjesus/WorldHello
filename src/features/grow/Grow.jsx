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

  @media (min-width: 61.25em) {
    flex-direction: row;
    padding: var(--padding-small);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge);
    justify-content: space-between;
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
`;

const Description = styled.span`
  font-size: var(--font-small);

  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
`;

const Img = styled.img`
  @media (min-width: 40.25em) {
    padding: var(--padding-large);
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xxlarge);
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
          Let&rsquo;s strive for greater <Special>success</Special> together.
        </Description>
        <Button variation="secondary" size="small">
          click to begin your website
        </Button>
      </Information>
    </StyledGrow>
  );
}

export default Grow;
