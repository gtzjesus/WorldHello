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

function Grow() {
  return (
    <StyledGrow>
      <Information>
        <Title>
          Creating highly converting websites <br />
          <MiniDescription>
            through strategic designs, data & SEO.
          </MiniDescription>
        </Title>
        <Img src="/backgrounds/grow.webp"></Img>
        <Description>Join us and grow</Description>
        <MiniDescription>
          Grow your business with WorldHello, benefit from our collective
          resources and expertise.
          <br />
          <br />
          Achieve greater success together.
        </MiniDescription>
        <Button variation="secondary" size="small">
          click to begin your website
        </Button>
      </Information>
    </StyledGrow>
  );
}

export default Grow;
