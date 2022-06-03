import styled from 'styled-components';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.section`
  max-width: 90vw;
  margin: 0 auto;
  gap: 35px;
  h1 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }
  @media only screen and (min-width: ${breakpoints.size.l}) {
    max-width: 45vw;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  @media only screen and (min-width: ${breakpoints.size.m}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  opacity: 0.8;
  margin: 0;
`;
