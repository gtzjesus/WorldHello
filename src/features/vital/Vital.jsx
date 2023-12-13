import styled from 'styled-components';

const StyledVital = styled.div`
  display: flex;
  background-image: url('/backgrounds/earth.jpeg');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-large) var(--padding-medium);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
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
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Quote = styled.span`
  padding: var(--padding-xlarge) 0 0 0;
  font-size: var(--font-small);
`;

const Source = styled.span`
  text-transform: uppercase;
  border-bottom: 0.25rem solid #0069b6;
  width: fit-content;
  font-size: var(--font-xsmall);
  background: rgba(0, 0, 0, 0.35);
  border-radius: 5px;

  padding: 0.25rem;
`;

const Last = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-xlarge) 0 0 0;
  gap: var(--gap-small);
`;

const Ending = styled.span`
  font-size: var(--font-small);
`;
function Vital() {
  return (
    <StyledVital>
      <Information>
        <Title>Say Hello to the world!</Title>
        <Description>
          <Quote>
            &ldquo; 80% of consumers are more likely to buy from brands that
            offer personalized website experiences &rdquo;
          </Quote>
          <Source>
            <a href="https://bloggingwizard.com/website-statistics/">
              click to view source
            </a>
          </Source>
        </Description>
        <Last>
          <Ending>First impressions are vital,</Ending>
          <Ending>especially on the web!</Ending>
        </Last>
      </Information>
    </StyledVital>
  );
}

export default Vital;
