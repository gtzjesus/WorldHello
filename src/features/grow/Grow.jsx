import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledGrow = styled.div`
  background: var(--color-green);
  padding: var(--padding-medium);
  color: var(--color-white);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);
`;

const Img = styled.img``;

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
          Creating highly converting websites, <br />
          <MiniDescription>
            through strategic designs, data & SEO.
          </MiniDescription>
        </Title>
        <Img src="/backgrounds/grow.png"></Img>
        <Description>Join us and grow!</Description>
        <MiniDescription>
          Grow your business with WorldHello, get the full benefits from our
          collective resources and our years of expertise.
        </MiniDescription>
        <Description>
          Lets achieve greater <Special>success</Special> together.
        </Description>
        <Button variation="secondary" size="small">
          click to begin your website
        </Button>
      </Information>
    </StyledGrow>
  );
}

export default Grow;
