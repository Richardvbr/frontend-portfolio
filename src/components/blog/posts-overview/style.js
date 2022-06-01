import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.section`
  max-width: 80vw;
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 35px;

  @media only screen and (min-width: ${breakpoints.size.l}) {
    margin-top: 8rem;
    max-width: 45vw;
  }
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  opacity: 0.8;
  margin: 0;
`;
