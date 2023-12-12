import styled from 'styled-components';

const StyledVital = styled.div`
  display: flex;
  background-image: url('/backgrounds/earth.jpeg');
  background-size: cover;
  height: 100vh;
  color: var(--color-white);
  padding: var(--padding-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  align-items: center;
  font-size: var(--font-medium);
  width: fit-content;
`;

const Special = styled.span`
  border-bottom: 0.25rem solid #3da40d;
`;

const Quote = styled.span`
  font-size: var(--font-small);
`;

const Source = styled.span`
  opacity: 0.4;
  font-size: var(--font-xsmall);
  text-transform: uppercase;
`;
function Vital() {
  return (
    <StyledVital>
      <Information>
        <Title>
          Say <Special>HELLO</Special> to the world!
        </Title>
        <Quote>
          80% of consumers are more likely to buy from brands that offer
          personalized website experiences
        </Quote>
        <Source href="https://bloggingwizard.com/website-statistics/">
          view source
        </Source>
      </Information>
    </StyledVital>
  );
}

export default Vital;
