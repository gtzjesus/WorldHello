import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledIntro = styled.div`
  position: fixed;
  bottom: 0;
  // FONTS
  font-size: var(--font-medium);
  padding: var(--padding-small);
  // ARRANGE CHILDREN
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;
function Intro() {
  return (
    <StyledIntro>
      Creating impactful digital footprints that thrive in the world wide web
      <Button />
    </StyledIntro>
  );
}

export default Intro;
