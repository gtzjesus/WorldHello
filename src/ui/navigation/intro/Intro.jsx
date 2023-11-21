import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledIntro = styled.div`
  position: fixed;
  bottom: 0;
  // FONTS
  font-size: var(--font-medium);
  padding: var(--padding-small);
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
