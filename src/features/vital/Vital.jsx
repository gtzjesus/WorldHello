import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const StyledVital = styled.div`
  display: flex;
  background-image: url('/backgrounds/earth.jpg');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-large) var(--padding-medium);

  @media (min-width: 40.25em) {
  }

  @media (min-width: 61.25em) {
  }

  @media (min-width: 78.15em) {
  }

  @media (min-width: 150.15em) {
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  text-transform: uppercase;
  color: var(--color-white);
  padding: 0 0 var(--padding-medium) 0;
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
  font-size: var(--font-small);
  background-color: var(--color-white);
  color: var(--color-green);
  padding: var(--padding-xxsmall);
  margin: var(--padding-medium) 0;
`;

const Special = styled.span`
  color: var(--color-green);
`;

const Source = styled.span``;

const Last = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-xlarge) 0 0 0;
  gap: var(--gap-small);
`;

const Ending = styled.span`
  font-size: var(--font-xsmall);
`;

function Vital() {
  return (
    <StyledVital>
      <Information>
        <Intro>[ why it matters ]</Intro>

        <Title>
          Greet the world and establish your brand&rsquo;s presence.
        </Title>
        <Description>
          <Quote>
            <Special>&ldquo;</Special> 80% of consumers are more likely to buy
            from brands that offer personalized website experiences.
            <Special>&rdquo;</Special>
          </Quote>
          <Source>
            <a href="https://bloggingwizard.com/website-statistics/">
              <Button variation="secondary" size="small">
                view article
              </Button>
            </a>
          </Source>
        </Description>
        <Last>
          <Ending>
            Ensure your initial impression resonates long after the first
            encounter, particularly online.
          </Ending>
        </Last>
      </Information>
    </StyledVital>
  );
}

export default Vital;
