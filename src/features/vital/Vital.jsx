import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

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

const Source = styled.span``;

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
            <Button
              href="https://bloggingwizard.com/website-statistics/"
              variation="third"
              size="small"
            >
              click to visit source
            </Button>
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
