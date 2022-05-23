import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

const Container = styled.section`
  max-width: 80vw;
  margin: 10rem auto 0;

  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 45vw;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
`;

export { Container, FlexContainer };
